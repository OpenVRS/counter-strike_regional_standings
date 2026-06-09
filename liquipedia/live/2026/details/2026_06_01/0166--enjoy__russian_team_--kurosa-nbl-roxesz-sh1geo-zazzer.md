### Roster Details<br />
Team Name: ENJOY (Russian team)<br />
Roster: kurosa, nbl, roxesz, sh1geo, zazzer<br />
Global Rank: [166](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [110]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  838.1<br />
<br />
Final Rank Value (838.1) = Starting Rank Value (714.9) + Head To Head Adjustments (123.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.088[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 714.9
- 400 + ( ( 0.165 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 714.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.234
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       13 | 2026-06-01 | G2 Ares              | W   | 1.000      | 0.303        | 0.011 (0.003)    | 0.597 (0.181)    | 0 (0.000) |    22.05 | kurosa, nbl, roxesz, sh1geo, zazzer |
|           13 |       61 | 2026-05-30 | G2 Ares              | W   | 1.000      | 0.303        | 0.011 (0.003)    | 0.597 (0.181)    | 0 (0.000) |    23.93 | kurosa, nbl, roxesz, sh1geo, zazzer |
|           12 |      127 | 2026-05-28 | Brazylijski luz      | W   | 1.000      | 0.303        | 0.005 (0.002)    | 0.414 (0.125)    | 0 (0.000) |    19.34 | kurosa, nbl, roxesz, sh1geo, zazzer |
|           11 |      223 | 2026-05-25 | Dripmen              | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.247 (0.075)    | 0 (0.000) |    12.71 | kurosa, nbl, roxesz, sh1geo, zazzer |
|           10 |      306 | 2026-05-23 | SAW                  | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.207 (0.063)    | 0 (0.000) |    15.62 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            9 |     1589 | 2026-04-12 | Vexar                | W   | 0.873      | 0.278        | 0.002 (0.000)    | 0.252 (0.061)    | 0 (0.000) |    11.72 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            8 |     1619 | 2026-04-11 | CYBERSHOKE Prospects | W   | 0.865      | 0.278        | 0.006 (0.002)    | 0.499 (0.120)    | 0 (0.000) |    22.42 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            7 |     1670 | 2026-04-09 | ZOTIX                | W   | 0.853      | 0.278        | 0.000 (0.000)    | 0.028 (0.007)    | 0 (0.000) |     6.07 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            6 |     2546 | 2026-03-27 | OLDBOYS              | L   | 0.766      | -            | -                | -                | -         |   -11.82 | nbl, roxesz, sh1geo, spiker, zazzer |
|            5 |     3238 | 2026-03-13 | Young Ninjas         | L   | 0.673      | -            | -                | -                | -         |    -6.60 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            4 |     4630 | 2026-02-14 | TDK                  | L   | 0.493      | -            | -                | -                | -         |    -1.17 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            3 |     4726 | 2026-02-13 | VP.Prodigy           | W   | 0.484      | 0.384        | 0.000 (0.000)    | 0.194 (0.036)    | 0 (0.000) |     5.97 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            2 |     4828 | 2026-02-10 | PsychoFace           | L   | 0.465      | -            | -                | -                | -         |    -2.37 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            1 |     4858 | 2026-02-09 | VP.Prodigy           | W   | 0.457      | 0.384        | 0.000 (0.000)    | 0.194 (0.034)    | 0 (0.000) |     5.28 | nbl, reyoz, roxesz, sh1geo, zazzer  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,870.64)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-01 |      1.000 | $3,000.00      | $3,000.00       |
| 2026-04-12 |      0.873 | $1,250.00      | $1,091.06       |
| 2026-03-29 |      0.780 | $1,000.00      | $779.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
