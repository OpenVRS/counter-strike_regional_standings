### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR<br />
Global Rank: [29](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [3]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  1430.7<br />
<br />
Final Rank Value (1430.7) = Starting Rank Value (1388.9) + Head To Head Adjustments (41.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.577[<sup>1</sup>](#table2)
- Bounty Collected: 0.448[<sup>2</sup>](#table1)
- Opponent Network: 0.209[<sup>2</sup>](#table1)
- LAN Wins: 0.809[<sup>2</sup>](#table1)

The average of these factors is 0.511<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1388.9
- 400 + ( ( 0.511 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1388.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      538 | 2026-07-12 | TYLOO             | W   | 1.000      | 0.143        | 0.183 (0.026)    | 0.819 (0.117)    | -         |    22.26 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           39 |      553 | 2026-07-11 | 5star             | W   | 1.000      | -            | -                | -                | -         |     3.54 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           38 |      565 | 2026-07-10 | Ground Zero       | W   | 1.000      | -            | -                | -                | -         |     2.38 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           37 |      651 | 2026-07-04 | B8                | L   | 0.997      | -            | -                | -                | -         |    -8.34 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           36 |      668 | 2026-07-03 | PARIVISION        | L   | 0.991      | -            | -                | -                | -         |    -6.47 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           35 |      686 | 2026-07-02 | Luminosity        | W   | 0.985      | 1.000        | 0.187 (0.185)    | 0.397 (0.391)    | 1 (0.985) |    19.17 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           34 |      695 | 2026-07-01 | BIG               | L   | 0.980      | -            | -                | -                | -         |   -11.26 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           33 |     1223 | 2026-06-05 | TYLOO             | L   | 0.806      | -            | -                | -                | -         |    -8.72 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           32 |     1236 | 2026-06-04 | MIBR              | L   | 0.800      | -            | -                | -                | -         |    -6.22 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           31 |     1269 | 2026-06-03 | DENDELE           | W   | 0.792      | 0.624        | 0.115 (0.057)    | 0.609 (0.301)    | 1 (0.792) |    12.60 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           30 |     1286 | 2026-06-02 | HEROIC            | W   | 0.786      | 0.624        | 0.148 (0.073)    | 0.557 (0.274)    | 1 (0.786) |    12.39 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           29 |     1297 | 2026-06-02 | M80               | L   | 0.785      | -            | -                | -                | -         |   -15.17 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           28 |     1754 | 2026-05-21 | PARIVISION        | L   | 0.706      | -            | -                | -                | -         |    -3.71 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           27 |     1774 | 2026-05-21 | Ninjas in Pyjamas | W   | 0.704      | 1.000        | 0.224 (0.158)    | 0.542 (0.382)    | 1 (0.704) |    12.86 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           26 |     1816 | 2026-05-19 | The MongolZ       | L   | 0.697      | -            | -                | -                | -         |    -4.82 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           25 |     1875 | 2026-05-17 | JiJieHao          | W   | 0.679      | 0.548        | 0.048 (0.018)    | 0.426 (0.159)    | 1 (0.679) |     5.96 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           24 |     1900 | 2026-05-16 | THUNDER dOWNUNDER | W   | 0.673      | 0.548        | 0.025 (0.009)    | 0.393 (0.145)    | 1 (0.673) |     4.86 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           23 |     1993 | 2026-05-13 | Kaleido           | W   | 0.652      | -            | -                | -                | 1 (0.652) |     0.79 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           22 |     2038 | 2026-05-12 | Haunted House     | W   | 0.644      | -            | -                | -                | 1 (0.644) |     0.52 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           21 |     2071 | 2026-05-11 | Alter Ego         | W   | 0.639      | -            | -                | -                | 1 (0.639) |     0.81 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           20 |     3189 | 2026-04-05 | TYLOO             | W   | 0.399      | 0.352        | 0.183 (0.026)    | 0.819 (0.115)    | 1 (0.399) |     9.40 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           19 |     3280 | 2026-04-04 | TYLOO             | W   | 0.391      | 0.352        | 0.183 (0.025)    | 0.819 (0.113)    | -         |     9.58 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           18 |     3367 | 2026-04-03 | Rare Atom         | W   | 0.384      | -            | -                | -                | -         |     0.65 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           17 |     3705 | 2026-03-30 | Change The Game   | W   | 0.359      | -            | -                | -                | -         |     0.31 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           16 |     3720 | 2026-03-30 | Chaos             | W   | 0.357      | -            | -                | -                | -         |     0.09 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           15 |     4200 | 2026-03-22 | Rare Atom         | W   | 0.304      | -            | -                | -                | -         |     0.51 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           14 |     4263 | 2026-03-20 | Kaleido           | W   | 0.297      | -            | -                | -                | -         |     0.38 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           13 |     4673 | 2026-03-12 | Chinggis Warriors | W   | 0.239      | -            | -                | -                | -         |     0.37 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           12 |     4685 | 2026-03-12 | Alter Ego         | W   | 0.238      | -            | -                | -                | -         |     0.28 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           11 |     4693 | 2026-03-11 | The Huns          | W   | 0.237      | 0.769        | 0.039 (0.007)    | 0.502 (0.091)    | -         |     1.04 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           10 |     4722 | 2026-03-11 | Kaleido           | W   | 0.231      | -            | -                | -                | -         |     0.30 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            9 |     4765 | 2026-03-10 | NEXVOID           | W   | 0.225      | -            | -                | -                | -         |     0.42 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            8 |     4772 | 2026-03-09 | Ground Zero       | W   | 0.223      | -            | -                | -                | -         |     0.17 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            7 |     4839 | 2026-03-08 | Alter Ego         | L   | 0.217      | -            | -                | -                | -         |    -6.60 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            6 |     5328 | 2026-02-26 | The Huns          | L   | 0.151      | -            | -                | -                | -         |    -4.15 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            5 |     5368 | 2026-02-26 | Rare Atom         | L   | 0.146      | -            | -                | -                | -         |    -4.39 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            4 |     5394 | 2026-02-26 | Chinggis Warriors | W   | 0.144      | -            | -                | -                | -         |     0.20 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            3 |     6248 | 2026-02-08 | TYLOO             | L   | 0.026      | -            | -                | -                | -         |    -0.17 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            2 |     6274 | 2026-02-07 | Kaleido           | W   | 0.019      | -            | -                | -                | -         |     0.02 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            1 |     6315 | 2026-02-06 | Alter Ego         | W   | 0.011      | -            | -                | -                | -         |     0.00 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($91,869.88)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-12 |      1.000 | $27,500.00     | $27,500.00      |
| 2026-05-24 |      0.725 | $10,000.00     | $7,247.97       |
| 2026-05-17 |      0.679 | $80,000.00     | $54,326.09      |
| 2026-04-05 |      0.399 | $5,750.00      | $2,293.41       |
| 2026-03-22 |      0.304 | $1,650.00      | $502.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
