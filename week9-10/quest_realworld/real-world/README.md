# RealWorld
ブログプラットフォームを作る <a href="https://github.com/gothinkster/realworld/tree/main">RealWorld</a> という OSS のプロジェクトがあります。

RealWorld は実世界と同じ機能を持つプラットフォームを作ることで、学習したいフレームワークの技術を習得することを目的としてたプロジェクトです。

ここでは、<a href="https://realworld-docs.netlify.app/docs/specs/backend-specs/introduction/">RealWorld の バックエンドの API</a> の仕様を満たす Rails API を作成します。

<a href="https://realworld-docs.netlify.app/docs/intro/">RealWorld のドキュメント </a>に目を通して、RealWorld の仕様を理解してください。



## エンドポイント
RealWorld　の API のうち、次のエンドポイントを実装<br>
<a href="https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints/#create-article">Create Article</a><br>
<a href="https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints/#get-article">Get Article</a><br>
<a href="https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints/#update-article">Update Article</a><br>
<a href="https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints/#delete-article">Delete Article</a><br>

なお、Article に関わる要素のうち、認証機能及び著者、タグ、お気に入り(favorite) は実装しない。

RealWorld の API の仕様を部分的に満たした API を作成します。具体的には、認証機能のない簡易バージョンの作成になります。

