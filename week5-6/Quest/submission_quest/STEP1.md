# ステップ1
テーブル設計をしてください。

テーブルごとにテーブル名、カラム名、データ型、NULL(NULL OK の場合のみ YES と記載)、キー（キーが存在する場合、PRIMARY/INDEX のどちらかを記載）、初期値（ある場合のみ記載）、AUTO INCREMENT（ある場合のみ YES と記載）を記載してください。また、外部キー制約、ユニークキー制約に関しても記載してください。

その際に、少なくとも次のことは満たしてください。

- アプリケーションとして成立すること(プログラムを組んだ際に仕様を満たして動作すること)
- 正規化されていること
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
| start_time   | TIME        |        |        |       |                |
| end_time     | TIME        |        |        |       |                |
- ユニークキー制約： start_time, end_timeカラムに対して設定

テーブル：genres
| カラム名 | データ型 | NULL | キー | 初期値 | AUTO INCREMENT |
|:-----------|------------:|:------------:|:------------:|:------------:|:------------:|
| genre_id | INT         |              | PRIMARY      |              | YES          |
| genre_name|VARCHAR(255)|              |              |              |              |
- ユニークキー制約： genre_nameカラムに対して設定

テーブル:program_genres
| カラム名 | データ型 | NULL | キー | 初期値 | AUTO INCREMENT |
|:-----------|------------:|:------------:|:------------:|:------------:|:------------:|
| program_id | INT         |              | PRIMARY      |              | YES          |
| genre_id|INT           |              | PRIMARY      |              | YES          |
- 外部キー制約：\
・program_idに対して,programsテーブルのprogram_idカラムを設定\
・genre_idに対して,genresテーブルのgenre_idカラムを設定


テーブル:series
| カラム名 | データ型 | NULL | キー | 初期値 | AUTO INCREMENT |
|:-----------|------------:|:------------:|:------------:|:------------:|:------------:|
| series_id | INT         |              | PRIMARY      |              | YES          |
| series_name|VARCHAR(255)|              |              |              |              |
| series_detail| TEXT     |              |              |              |              |
| program_id | INT         |              | FOREIGN      |              |              |
- 外部キー制約：\
・program_idに対して,programsテーブルのprogram_idカラムを設定



テーブル：seasons
| カラム名 | データ型 | NULL | キー | 初期値 | AUTO INCREMENT |
|:-----------|------------:|:------------:|:------------:|:------------:|:------------:|
| season_id | INT         |              | PRIMARY      |              | YES          |
| series_id | INT         |              | FOREIGN      |              |              |
| season_number| INT       |              |              |              |              |
| season_name|VARCHAR(255)|              |              |              |              |
| season_detail| TEXT     |              |              |              |              |
- 外部キー制約：\
・series_idに対して,seriesテーブルのseries_idカラムを設定


テーブル：programs
| カラム名 | データ型 | NULL | キー | 初期値 | AUTO INCREMENT |
|:-----------|------------:|:------------:|:------------:|:------------:|:------------:|
| program_id | INT         |              | PRIMARY      |              | YES          |
| program_name|VARCHAR(255)|              |              |              |              |
| program_detail| TEXT     |              |              |              |              |
- ユニークキー制約： program_nameカラムに対して設定


テーブル：episodes
| カラム名 | データ型 | NULL | キー | 初期値 | AUTO INCREMENT |
|:-----------|------------:|:------------:|:------------:|:------------:|:------------:|
| episode_id | INT         |              | PRIMARY      |              | YES          |
| season_id | INT         |              | FOREIGN      |              |              |
| episode_number| INT       |              |              |              |              |
| title|VARCHAR(255)|              |              |              |              |
| episode_detail| TEXT     |              |              |              |              |
| duration| INT     |              |              |              |              |
| release_date| DATE     |              |              |              |              |
- 外部キー制約：\
・season_idに対して,seasonsテーブルのseason_idカラムを設定

テーブル：program_schedule
| カラム名 | データ型 | NULL | キー | 初期値 | AUTO INCREMENT |
|:-----------|------------:|:------------:|:------------:|:------------:|:------------:|
| schedule_id | INT         |              | PRIMARY      |              | YES          |
| channel_id | INT         |              | FOREIGN      |              |              |
| time_slot_id| INT       |              | FOREIGN      |              |              |
| episode_id| INT       |              | FOREIGN      |              |              |
| view_count| BIGINT       |              |              | 0            |              |
| broadcast_date| DATE       |              |              |              |              |
- 外部キー制約：\
・channel_idに対して,channelsテーブルのchannel_idカラムを設定\
・time_slot_idに対して,time_slotsテーブルのtime_slot_idカラムを設定\
・episode_idに対して,episodesテーブルのepisode_idカラムを設定
