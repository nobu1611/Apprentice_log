// TODO 要素ノードの変更
// document.querySelectorを使ってページ内の最初のh1タグを取得
let h1 = document.querySelector("h1")
// テキストを「シンプルブログ」に変更
h1.textContent = "シンプルブログ"

//TODO イベントハンドラの設定
  // フォームの要素を取得
let form = document.getElementById('post-form')
  // console.log(form);

// submitイベントリスナーを追加。フォームが送信される時に実行される
form.addEventListener('submit', function (event) {
  // デフォルトのフォーム送信を防ぐ
  event.preventDefault();

  // 入力内容の取得
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;

// TODO 要素ノードの追加
  // #posts要素を取得します
  let posts = document.getElementById('posts')

  // 新しい投稿要素を作成します。document.createElementメソッドは、指定されたタグ名の新しいHTML要素を作成
  let newPost = document.createElement('div');
  let h2 = document.createElement('h2');
  let p = document.createElement('p');

  // テキストを設定
  h2.textContent = title;
  p.textContent = content;

  // 新しい投稿要素に追加。appendChildメソッドは、指定された要素を子要素として追加
  newPost.appendChild(h2);
  newPost.appendChild(p);

  // #posts要素に新しい投稿要素を追加
  posts.appendChild(newPost);

// TODO フォームを空にする
  // フォームの中身を空にします
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';

// TODO スタイルの変更
  // div要素を取得します
  let postForm = document.getElementById('post-form');

  // mouseoverイベントリスナーを追加します
  postForm.addEventListener('mouseover', function () {
    // 背景色を黄色に設定します。ここでのthisはイベントが発生した要素（この場合は#post-formのdiv）を指しています。
    this.style.backgroundColor = 'yellow';
  });

  // mouseoutイベントリスナーを追加します
  postForm.addEventListener('mouseout', function () {
    // 背景色を白色に設定します
    this.style.backgroundColor = 'white';
  });

  // #posts内の投稿が3つを超えている場合、一番古い投稿を削除します
  while (posts.children.length > 3) {
    posts.removeChild(posts.firstChild);
  }

  // 入力内容をコンソールに出力します
  console.log(title);
  console.log(content);
})
