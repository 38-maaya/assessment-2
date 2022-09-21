'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if (userName.length === 0) {
    // 名前が空の時は処理を終了する
    return;
  }

  // 診断結果表示エリア
  resultDivided.innetrText = '';
  const header = document.createElement('h3');//見出し用
  header.innnertext = '診断結果';//<h3>診断結果</h3>
  resultDivided.appendChild(header);


  const paragraph = document.createElement('p');//pタグ
  const result = assessment(userName);//診断結果を用意しておく
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);

  // TODO ツイートエリアの作成
  tweetDivided.innerText = '';
  const anchor = document.createElement('a');
  const hrefValue =
  'https://twitter.com/intent/tweet?button_hashtag=' +
  encodeURIComponent('あなたにおすすめのINIメンバー') +
  '&ref_src=twsrc%5Etfw';
  anchor.setAttribute('href', hrefValue);
  anchor.setAttribute('class','twitter-hashtag-button');
  anchor.setAttribute('data-text', result);
  anchor.innerText = 'Tweet #あなたにおすすめのINIメンバー';
  tweetDivided.appendChild(anchor);

  // widgets.js の設定
  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDivided.appendChild(script);
};


const answers = [
  '{userName}におすすめのメンバーは西洸人です。',
  '{userName}におすすめのメンバーは池﨑理人です。',
  '{userName}におすすめのメンバーは尾崎匠海です。',
  '{userName}におすすめのメンバーは木村柾哉です。',
  '{userName}におすすめのメンバーは後藤威尊です。',
  '{userName}におすすめのメンバーは佐野雄大です。',
  '{userName}におすすめのメンバーは許豊凡です。',
  '{userName}におすすめのメンバーは髙塚大夢です。',
  '{userName}におすすめのメンバーは田島将吾です。',
  '{userName}におすすめのメンバーは藤牧京介です。',
  '{userName}におすすめのメンバーは松田 迅です。',
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * ＠param {string} userName ユーザーの名前
 * ＠return {string} 診断結果
 */
function assessment (userName){
    //全文字のコード番号を取得してそれぞれを足しあわせる
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i)
    }

    //文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
   result = result.replaceAll('{userName}',userName);
    return result;
}