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
function checkPermission(username, permission) {
  
}

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

console.log(users[0].permissions.canRead);
// checkPermission('山田', 'canWrite')
