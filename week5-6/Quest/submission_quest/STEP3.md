# ステップ3
以下のデータを抽出するクエリを書いてください。

1. よく見られているエピソードを知りたいです。エピソード視聴数トップ3のエピソードタイトルと視聴数を取得してください
```sql
SELECT
    episodes.title AS episode_title,
    program_schedule.view_count AS view_count
FROM
    program_schedule
INNER JOIN
    episodes ON program_schedule.episode_id = episodes.episode_id
ORDER BY
    program_schedule.view_count DESC
LIMIT 3;
```
2. よく見られているエピソードの番組情報やシーズン情報も合わせて知りたいです。エピソード視聴数トップ3の番組タイトル、シーズン数、エピソード数、エピソードタイトル、視聴数を取得してください
```sql
SELECT
    programs.program_name AS program_title,
    seasons.season_number AS season_number,
    episodes.episode_number AS episode_number,
    episodes.title AS episode_title,
    program_schedule.view_count AS view_count
FROM
    program_schedule
INNER JOIN
    episodes ON program_schedule.episode_id = episodes.episode_id
INNER JOIN
    seasons ON episodes.season_id = seasons.season_id
INNER JOIN
    series ON seasons.series_id = series.series_id
INNER JOIN
    programs ON series.program_id = programs.program_id
ORDER BY
    program_schedule.view_count DESC
LIMIT 3;
```
3. 本日の番組表を表示するために、本日、どのチャンネルの、何時から、何の番組が放送されるのかを知りたいです。本日放送される全ての番組に対して、チャンネル名、放送開始時刻(日付+時間)、放送終了時刻、シーズン数、エピソード数、エピソードタイトル、エピソード詳細を取得してください。なお、番組の開始時刻が本日のものを本日方法される番組とみなすものとします
```sql
SELECT
    channels.channel_name AS channel_name,
    CONCAT(CURDATE(), ' ', time_slots.start_time) AS start_time,
    CONCAT(CURDATE(), ' ', time_slots.end_time) AS end_time,
    seasons.season_number AS season_number,
    episodes.episode_number AS episode_number,
    episodes.title AS episode_title,
    episodes.episode_detail AS episode_detail
FROM
    program_schedule
INNER JOIN
    channels ON program_schedule.channel_id = channels.channel_id
INNER JOIN
    time_slots ON program_schedule.time_slot_id = time_slots.time_slot_id
INNER JOIN
    episodes ON program_schedule.episode_id = episodes.episode_id
INNER JOIN
    seasons ON episodes.season_id = seasons.season_id
WHERE
    DATE(CONCAT(CURDATE(), ' ', time_slots.start_time)) = CURDATE()
ORDER BY
    start_time ASC;
```
4. ドラマというチャンネルがあったとして、ドラマのチャンネルの番組表を表示するために、本日から一週間分、何日の何時から何の番組が放送されるのかを知りたいです。ドラマのチャンネルに対して、放送開始時刻、放送終了時刻、シーズン数、エピソード数、エピソードタイトル、エピソード詳細を本日から一週間分取得してください
```sql
SELECT
    ps.broadcast_date,
    ts.start_time,
    ts.end_time,
    s.season_number,
    e.episode_number,
    e.title,
    e.episode_detail
FROM
    program_schedule ps
INNER JOIN
    time_slots ts ON ps.time_slot_id = ts.time_slot_id
INNER JOIN
    channels ch ON ps.channel_id = ch.channel_id
INNER JOIN
    episodes e ON ps.episode_id = e.episode_id
INNER JOIN
    seasons s ON e.season_id = s.season_id
WHERE
    ch.channel_name = 'ドラマチャンネル' AND
    ps.broadcast_date BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 7 DAY)
ORDER BY
    ps.broadcast_date ASC,
    ts.start_time ASC;
```
5. (advanced) 直近一週間で最も見られた番組が知りたいです。直近一週間に放送された番組の中で、エピソード視聴数合計トップ2の番組に対して、番組タイトル、視聴数を取得してください
6. (advanced) ジャンルごとの番組の視聴数ランキングを知りたいです。番組の視聴数ランキングはエピソードの平均視聴数ランキングとします。ジャンルごとに視聴数トップの番組に対して、ジャンル名、番組タイトル、エピソード平均視聴数を取得してください。
