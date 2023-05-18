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
|   カラム名  |    データ型   |  NULL |   キー  | 初期値 | AUTO INCREMENT |
|:-----------:|:------------:|:------:|:------:|:----:|:--------------:|
| channel_id  | int         |        | PRIMARY|       | YES            |
| channel_name| VARCHAR(255)|        |        |       |                |
- ユニークキー制約： channel_nameカラムに対して設定

テーブル：time_slots
|   カラム名   |    データ型   |  NULL |   キー  | 初期値 | AUTO INCREMENT |
|:----------- |------------:|:------:|:------:|:----:|:--------------:|
| time_slot_id | int         |        | PRIMARY|       | YES            |
| time_slot    | VARCHAR(255) |        |        |       |                |
- ユニークキー制約： time_slotカラムに対して設定

テーブル：programs
| カラム名 | データ型 | NULL | キー | 初期値 | AUTO INCREMENT |
|:-----------|------------:|:------------:|:------------:|:------------:|:------------:|
| program_id | INT         |              | PRIMARY      |              | YES          |
| program_name|VARCHAR(255)|              |              |              |              |
| program_detail| TEXT     |              |              |              |              |
| genre      | VARCHAR(255)|              |              |              |              |
- ユニークキー制約： program_nameカラムに対して設定

テーブル：episodes
| カラム名 | データ型 | NULL | キー | 初期値 | AUTO INCREMENT |
|:-----------|------------:|:------------:|:------------:|:------------:|:------------:|
| episode_id | INT         |              | PRIMARY      |              | YES          |
| program_id | INT         |              | FOREIGN      |              |              |
| season_number| INT       |              |              |              |              |
| episode_number| INT      |              |              |              |              |
| episode_title| VARCHAR(255)|            |              |              |              |
| episode_detail| TEXT      |             |              |              |              |
| duration   | TIME        |              |              |              |              |
| release_date| DATE       |              |              |              |              |

テーブル：program_schedules
| カラム名 | データ型 | NULL | キー | 初期値 | AUTO INCREMENT |
|:-----------|------------:|:------------:|:------------:|:------------:|:------------:|
| schedule_id| INT         |              | PRIMARY      |              | YES          |
| channel_id | INT         |              | FOREIGN      |              |              |
| time_slot_id| INT        |              | FOREIGN      |              |              |
| program_id | INT         |              | FOREIGN      |              |              |
| episode_id | INT         |              | FOREIGN      |              |              |

- ユニークキー制約： channel_idとtime_slot_idの組み合わせのカラムに対して設定

- 外部キー制約：\
・channel_idに対して,channelsテーブルのchannel_idカラムを設定\
・time_slot_idに対して,time_slotsテーブルのtime_slot_idカラムを設定\
・program_idに対して,programsテーブルのprogram_idカラムを設定\
・episode_idに対して,episodesテーブルのepisode_idカラムを設定\


テーブル：viewership
| カラム名 | データ型 | NULL | キー | 初期値 | AUTO INCREMENT |
|:-----------|------------:|:------------:|:------------:|:------------:|:------------:|
| viewership_id| BIGINT(20) |             | PRIMARY      |              | YES          |
| schedule_id | INT         |              | FOREIGN      |              |              |
| view_count  | BIGINT(20)  |              |              | 0            |              |

- 外部キー制約：・schedule_idに対して,program_schedulesテーブルのschedule_idカラムを設定\
