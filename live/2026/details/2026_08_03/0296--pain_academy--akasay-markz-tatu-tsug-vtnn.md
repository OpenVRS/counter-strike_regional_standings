### Roster Details<br />
Team Name: paiN Academy<br />
Roster: akasay, Markz, Tatu, tsug, vtnn<br />
Global Rank: [296](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [69]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  619.4<br />
<br />
Final Rank Value (619.4) = Starting Rank Value (616.5) + Head To Head Adjustments (2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.212[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 616.5
- 400 + ( ( 0.112 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 616.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     4326 | 2026-03-19 | MAGICOS         | L   | 0.289      | -            | -                | -                | -         |    -5.59 | akasay, Bruninho, Markz, Tatu, tsug |
|           14 |     4391 | 2026-03-18 | MIBR Academy    | L   | 0.279      | -            | -                | -                | -         |    -2.71 | akasay, Bruninho, Markz, Tatu, tsug |
|           13 |     4465 | 2026-03-16 | GameHunters     | L   | 0.269      | -            | -                | -                | -         |    -2.75 | akasay, Bruninho, Markz, Tatu, tsug |
|           12 |     4606 | 2026-03-13 | METANOIA Wolves | W   | 0.247      | 0.371        | 0.001 (0.000)    | 0.059 (0.005)    | 0 (0.000) |     4.17 | akasay, Bruninho, Markz, Tatu, tsug |
|           11 |     4698 | 2026-03-11 | Keyd Stars      | L   | 0.235      | -            | -                | -                | -         |    -2.77 | akasay, Markz, Tatu, tsug, vtnn     |
|           10 |     4782 | 2026-03-09 | Isurus          | W   | 0.221      | 0.333        | 0.039 (0.003)    | 0.766 (0.056)    | 0 (0.000) |     5.78 | akasay, Markz, Tatu, tsug, vtnn     |
|            9 |     4861 | 2026-03-08 | ex-KRÜ          | W   | 0.214      | 0.333        | 0.005 (0.000)    | 0.187 (0.013)    | 0 (0.000) |     4.23 | akasay, Markz, Tatu, tsug, vtnn     |
|            8 |     4942 | 2026-03-07 | Procyon         | L   | 0.206      | -            | -                | -                | -         |    -2.44 | akasay, Markz, Tatu, tsug, vtnn     |
|            7 |     5061 | 2026-03-04 | FURIA fe        | W   | 0.188      | 0.333        | 0.000 (0.000)    | 0.045 (0.003)    | 0 (0.000) |     2.77 | akasay, Markz, Tatu, tsug, vtnn     |
|            6 |     5156 | 2026-03-02 | FURIA fe        | L   | 0.175      | -            | -                | -                | -         |    -2.93 | Markz, pazini, r3kt, Tatu, tsug     |
|            5 |     5171 | 2026-03-02 | LP              | L   | 0.173      | -            | -                | -                | -         |    -0.36 | akasay, Markz, Tatu, tsug, vtnn     |
|            4 |     5258 | 2026-02-28 | R2              | W   | 0.160      | 0.371        | 0.001 (0.000)    | 0.283 (0.017)    | 0 (0.000) |     2.67 | Markz, pazini, r3kt, Tatu, tsug     |
|            3 |     5357 | 2026-02-26 | Bad Luck        | W   | 0.147      | 0.371        | 0.000 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     1.37 | Markz, pazini, r3kt, Tatu, tsug     |
|            2 |     5493 | 2026-02-23 | UNO MILLE       | W   | 0.128      | 0.371        | 0.005 (0.000)    | 0.231 (0.011)    | 0 (0.000) |     2.55 | Markz, pazini, r3kt, Tatu, tsug     |
|            1 |     5556 | 2026-02-22 | GameHunters     | L   | 0.120      | -            | -                | -                | -         |    -1.15 | Markz, pazini, r3kt, Tatu, tsug     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($93.32)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-13 |      0.249 | $375.00        | $93.32          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
