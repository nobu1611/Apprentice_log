// ユーザーがテキストボックスにタスクを入力し、追加ボタンを押すと、タスクが追加され表示される。テキストボックスは空になる
const form = document.querySelector('form');
const input = document.getElementById('todo-input');
const submit = document.getElementById('add-button');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  input.value;
});
