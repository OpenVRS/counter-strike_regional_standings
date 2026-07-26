### Roster Details<br />
Team Name: Alzon<br />
Roster: balencyy, ntx, s1lent, wallz1k, yeda<br />
Global Rank: [329](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_12.md)<br />
Regional Rank: [86]( ../../standings_americas_2026_07_12.md)<br />
<br />
Final Rank Value:  529.2<br />
<br />
Final Rank Value (529.2) = Starting Rank Value (503.0) + Head To Head Adjustments (26.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 503.0
- 400 + ( ( 0.054 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 503.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.097
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1628 | 2026-05-07 | Imperial Esports         | L   | 0.759      | -            | -                | -                | -         |    -1.08 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           14 |     1649 | 2026-05-06 | Players (Brazilian team) | W   | 0.751      | 0.354        | 0.000 (0.000)    | 0.196 (0.052)    | 0 (0.000) |    15.17 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           13 |     1684 | 2026-05-04 | Crashers                 | W   | 0.738      | 0.354        | 0.001 (0.000)    | 0.289 (0.075)    | 0 (0.000) |    16.18 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           12 |     1740 | 2026-05-02 | BESTIA Academy           | L   | 0.725      | -            | -                | -                | -         |    -6.26 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           11 |     1857 | 2026-04-30 | Game Hunters             | W   | 0.710      | 0.354        | 0.001 (0.000)    | 0.389 (0.098)    | 0 (0.000) |    17.91 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           10 |     1949 | 2026-04-28 | Yawara E-Sports          | L   | 0.697      | -            | -                | -                | -         |    -1.90 | balencyy, ntx, s1lent, wallz1k, yeda     |
|            9 |     2197 | 2026-04-23 | Crashers                 | L   | 0.665      | -            | -                | -                | -         |    -4.92 | balencyy, ntx, s1lent, wallz1k, yeda     |
|            8 |     2228 | 2026-04-22 | Legacy                   | L   | 0.661      | -            | -                | -                | -         |    -0.01 | balencyy, ntx, s1lent, wallz1k, yeda     |
|            7 |     3835 | 2026-03-18 | BESTIA Academy           | L   | 0.425      | -            | -                | -                | -         |    -3.25 | balencyy, Ianzin, ntx, wallz1k, yeda     |
|            6 |     3881 | 2026-03-17 | Turma do Pagode          | L   | 0.419      | -            | -                | -                | -         |    -0.69 | balencyy, Ianzin, ntx, wallz1k, yeda     |
|            5 |     4764 | 2026-02-27 | Bad Luck                 | L   | 0.298      | -            | -                | -                | -         |    -4.99 | balencyy, busan, Ianzin, wallz1k, yeda   |
|            4 |     4886 | 2026-02-25 | CPC Curralzinho Esports  | W   | 0.284      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.16 | balencyy, busan, Ianzin, wallz1k, yeda   |
|            3 |     4966 | 2026-02-23 | LargadosyPelados         | L   | 0.271      | -            | -                | -                | -         |    -0.28 | balencyy, busan, Ianzin, wallz1k, yeda   |
|            2 |     4994 | 2026-02-22 | Players (Brazilian team) | L   | 0.266      | -            | -                | -                | -         |    -2.84 | balencyy, busan, Ianzin, wallz1k, yeda   |
|            1 |     6355 | 2026-01-17 | 9z Team                  | L   | 0.026      | -            | -                | -                | -         |     0.00 | balencyy, Ianzin, Luk1nha, wallz1k, yeda |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
