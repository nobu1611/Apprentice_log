ステップ1
テーブル設計をしてください。

テーブルごとにテーブル名、カラム名、データ型、NULL(NULL OK の場合のみ YES と記載)、キー（キーが存在する場合、PRIMARY/INDEX のどちらかを記載）、初期値（ある場合のみ記載）、AUTO INCREMENT（ある場合のみ YES と記載）を記載してください。また、外部キー制約、ユニークキー制約に関しても記載してください。

その際に、少なくとも次のことは満たしてください。

アプリケーションとして成立すること(プログラムを組んだ際に仕様を満たして動作すること)
正規化されていること
以下、アウトプット例です。

テーブル：users

カラム名	データ型	NULL	キー	初期値	AUTO INCREMENT
id	bigint(20)		PRIMARY		YES
name	varchar(100)
email	varchar(100)		INDEX
ユニークキー制約：email カラムに対して設定

テーブル：channels
|   カラム名   |    データ型   |  NULL |   キー  | 初期値 | AUTO INCREMENT |
|:----------- |------------:|:------:|:------:|:-- --:|:--------------:|
| channel_id  | int         |        | PRIMARY|       | YES            |
| channel_name| varchar(100)|        |        |       |                |

テーブル：time_slots
|   カラム名   |    データ型   |  NULL |   キー  | 初期値 | AUTO INCREMENT |
|:----------- |------------:|:------:|:------:|:-- --:|:--------------:|
| timeslot_id | int         |        | PRIMARY|       | YES            |
| timeslot    | |        |        |       |                |

テーブル：programs
| カラム名 | データ型 | NULL | キー | 初期値 | AUTO INCREMENT |
|:-----------|------------:|:------------:|:------------:|:------------:|:------------:|
| This       | This        | This         | This         | This         | This         |
| column     | column      | column       | column       | column       | column       |
| will       | will        | will         | will         | will         | will         |
| be         | be          | be           | be           | be           | be           |

テーブル：program_schedules
| カラム名 | データ型 | NULL | キー | 初期値 | AUTO INCREMENT |
|:-----------|------------:|:------------:|:------------:|:------------:|:------------:|
| This       | This        | This         | This         | This         | This         |
| column     | column      | column       | column       | column       | column       |
| will       | will        | will         | will         | will         | will         |
| be         | be          | be           | be           | be           | be           |
