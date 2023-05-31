// 書籍プリンター
function printBooks(books) {
  books.forEach(book => {
    console.log(`『${book.title}』${book.author}`);
  });
}

const books = [
  { title: "JavaScript入門", author: "山田太郎" },
  { title: "JavaScriptの絵本", author: "山田次郎" }
] // オブジェクトの配列を定義する

console.log(books[0].title);
printBooks(books)


// ユーザーパーミッションチェッカー

// ユーザー配列定義
let users = [
  {
    username: '山田',
    permissions: {
      canRead: true,
      canWrite: true,
      canDelete: false
    }
  },
  {
    username: '佐藤',
    permissions: {
      canRead: false,
      canWrite: true,
      canDelete: false
    }
  },
  {
    username: '兵後',
    permissions: {
      canRead: true,
      canWrite: true,
      canDelete: true
    }
  },
  // ユーザーを追加してください
];

function checkPermission(username, permission) {
  const user = users.find(user => user.username === username);

  if ( user.username == username ) {
    if ( user.permissions[permission] ) {
      console.log(true);
    } else if ( !user.permissions[permission] ) {
      console.log(false);
    }
  }
}

// console.log(users[0].permissions.canRead);
checkPermission('山田', 'canWrite')
checkPermission('兵後', 'canWrite')
checkPermission('佐藤', 'canDelete')

// メソッド
// １　正しい
// const obj = {
//   method: function () {
//     console.log('method');
//   },
// }

// obj.method();

// ２　正しい
// const obj = {
//   method: () => {
//     console.log('method');
//   },
// }

// obj.method();

// ３　正しい
// const obj = {
//   method() {
//     console.log('method');
//   },
// }

// obj.method();

// ４　誤り
// const obj = {
//   () => {
//   console.log('method');
// },
// }

// obj.method();
