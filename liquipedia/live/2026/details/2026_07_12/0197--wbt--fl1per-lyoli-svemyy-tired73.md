### Roster Details<br />
Team Name: WBT<br />
Roster: fl1peR, lyoli, svemyy, tired73<br />
Global Rank: [197](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [133]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  746.0<br />
<br />
Final Rank Value (746.0) = Starting Rank Value (688.1) + Head To Head Adjustments (57.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 688.1
- 400 + ( ( 0.152 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 688.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.262
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      107 | 2026-07-04 | Ex-MANA eSports      | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.580 (0.083)    | 0 (0.000) |    19.08 | fl1peR, marat2k, NxStep, svemyy, tired73 |
|           12 |      145 | 2026-07-02 | Misa Esports         | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.530 (0.076)    | 0 (0.000) |    17.67 | fl1peR, marat2k, NxStep, svemyy, tired73 |
|           11 |      173 | 2026-07-01 | SAW Youngsters       | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.401 (0.057)    | 0 (0.000) |    16.08 | fl1peR, marat2k, NxStep, svemyy, tired73 |
|           10 |      252 | 2026-06-27 | Misa Esports         | L   | 1.000      | -            | -                | -                | -         |   -11.12 | fl1peR, marat2k, NxStep, svemyy, tired73 |
|            9 |      341 | 2026-06-20 | Fire Flux Esports    | L   | 1.000      | -            | -                | -                | -         |   -14.72 | aRTYSAN, fl1peR, lyoli, svemyy, tired73  |
|            8 |      360 | 2026-06-19 | Arch Esports         | W   | 1.000      | 0.407        | 0.002 (0.001)    | 0.088 (0.036)    | 0 (0.000) |    13.89 | aRTYSAN, fl1peR, lyoli, svemyy, tired73  |
|            7 |      611 | 2026-06-07 | Noir Verse           | L   | 0.965      | -            | -                | -                | -         |   -11.67 | aRTYSAN, fl1peR, lyoli, svemyy, tired73  |
|            6 |      781 | 2026-05-31 | ZOTIX                | W   | 0.918      | 0.274        | 0.001 (0.000)    | 0.036 (0.009)    | 0 (0.000) |    10.27 | fl1per, lyoli, Psycho, svemyy, tired73   |
|            5 |      797 | 2026-05-31 | KLG (Ukrainian team) | W   | 0.916      | 0.274        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.14 | fl1per, lyoli, Psycho, svemyy, tired73   |
|            4 |     3567 | 2026-03-23 | Lavked               | L   | 0.459      | -            | -                | -                | -         |    -3.97 | aRTYSAN, fl1peR, lyoli, svemyy, tired73  |
|            3 |     3585 | 2026-03-23 | QUAZAR               | W   | 0.458      | 0.624        | 0.028 (0.008)    | 0.302 (0.086)    | 0 (0.000) |     8.79 | aRTYSAN, fl1peR, lyoli, svemyy, tired73  |
|            2 |     5435 | 2026-02-15 | IC Academy           | W   | 0.216      | 0.294        | 0.010 (0.001)    | 0.277 (0.018)    | 0 (0.000) |     4.78 | aRTYSAN, fl1peR, lyoli, svemyy, tired73  |
|            1 |     5482 | 2026-02-14 | Pink Floyd           | W   | 0.210      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.72 | aRTYSAN, fl1peR, lyoli, svemyy, tired73  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,967.29)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      1.000 | $2,500.00      | $2,500.00       |
| 2026-05-31 |      0.918 | $1,128.00      | $1,035.07       |
| 2026-02-15 |      0.216 | $2,000.00      | $432.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
