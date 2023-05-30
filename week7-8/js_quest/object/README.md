# オブジェクト
- オブジェクトはプロパティの集合です。プロパティとは名前（キー）と値（バリュー）が対になったものです。 プロパティのキーには文字列またはSymbolが利用でき、値には任意のデータを指定できます。 また、1つのオブジェクトは複数のプロパティを持てるため、1つのオブジェクトで多種多様な値を表現できます。

- 今までも登場してきた、配列や関数などもオブジェクトの一種です。 JavaScriptには、あらゆるオブジェクトの元となるObjectというビルトインオブジェクトがあります。 ビルトインオブジェクトは、実行環境にあらかじめ定義されているオブジェクトのことです。 ObjectというビルトインオブジェクトはECMAScriptの仕様で定義されているため、あらゆるJavaScriptの実行環境で利用できます。

### オブジェクトを作成するには、オブジェクトリテラル（{}）を利用します。
```js
// プロパティを持たない空のオブジェクトを作成
const obj = {};
```
オブジェクトリテラルでは、初期値としてプロパティを持つオブジェクトを作成できます。 プロパティは、オブジェクトリテラル（{}）の中にキーと値を:（コロン）で区切って記述します。
```js
// プロパティを持つオブジェクトを定義する
const obj = {
    // キー: 値
    // キーはクォートを省略することが可能
    key: "value"
};
```
複数のプロパティ（キーと値の組み合わせ）を持つオブジェクトも作成できます。 複数のプロパティを定義するには、それぞれのプロパティを,（カンマ）で区切る必要があります。
```js
const color = {
    // それぞれのプロパティは`,`で区切る
    red: "red",
    green: "green",
    blue: "blue"
};
```
プロパティの値に変数名を指定すれば、そのキーは指定した変数を参照します。
```js
const name = "名前";
// `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
const obj = {
    name: name
};
console.log(obj); // => { name: "名前" }
```