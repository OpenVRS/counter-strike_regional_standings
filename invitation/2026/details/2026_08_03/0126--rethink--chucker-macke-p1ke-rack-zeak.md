### Roster Details<br />
Team Name: ReThink<br />
Roster: chucker, macke, p1ke, Rack, zeak<br />
Global Rank: [126](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [90]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  915.7<br />
<br />
Final Rank Value (915.7) = Starting Rank Value (884.5) + Head To Head Adjustments (31.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.332[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 884.5
- 400 + ( ( 0.250 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 884.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      778 | 2026-06-27 | roamsfiest       | W   | 0.954      | 0.325        | 0.004 (0.001)    | 0.175 (0.054)    | 1 (0.954) |    11.80 | chucker, macke, p1ke, Rack, zeak     |
|           16 |      795 | 2026-06-26 | train launcher   | W   | 0.948      | 0.325        | 0.003 (0.001)    | 0.132 (0.041)    | 1 (0.948) |     8.86 | chucker, macke, p1ke, Rack, zeak     |
|           15 |      801 | 2026-06-26 | Johnny Speeds    | W   | 0.947      | 0.325        | 0.039 (0.012)    | 0.670 (0.206)    | 1 (0.947) |    22.24 | chucker, macke, p1ke, Rack, zeak     |
|           14 |      860 | 2026-06-22 | ENERGYULTRA      | W   | 0.921      | 0.313        | 0.001 (0.000)    | 0.043 (0.012)    | 0 (0.000) |     5.84 | chucker, macke, p1ke, Rack, zeak     |
|           13 |      861 | 2026-06-22 | Lilmix           | W   | 0.920      | 0.313        | 0.001 (0.000)    | 0.491 (0.141)    | 0 (0.000) |     8.48 | chucker, macke, p1ke, Rack, zeak     |
|           12 |      870 | 2026-06-21 | roamsfiest       | L   | 0.912      | -            | -                | -                | -         |   -16.92 | chucker, macke, p1ke, Rack, zeak     |
|           11 |      879 | 2026-06-20 | QUAZAR           | L   | 0.907      | -            | -                | -                | -         |    -9.84 | chucker, macke, p1ke, Rack, zeak     |
|           10 |      897 | 2026-06-19 | BAKS             | W   | 0.901      | 0.400        | 0.011 (0.004)    | 0.208 (0.075)    | 0 (0.000) |    17.66 | chucker, macke, p1ke, Rack, zeak     |
|            9 |      944 | 2026-06-15 | Wingman          | W   | 0.874      | 0.143        | 0.000 (0.000)    | 0.163 (0.020)    | 0 (0.000) |     5.08 | chucker, macke, p1ke, Rack, zeak     |
|            8 |     1215 | 2026-06-05 | QUAZAR           | L   | 0.807      | -            | -                | -                | -         |    -8.71 | chucker, macke, p1ke, Rack, zeak     |
|            7 |     1250 | 2026-06-03 | B8 Academy       | W   | 0.794      | 0.143        | 0.000 (0.000)    | 0.037 (0.004)    | 0 (0.000) |     4.31 | chucker, macke, p1ke, Rack, zeak     |
|            6 |     1302 | 2026-06-01 | VP.Prodigy       | W   | 0.781      | 0.143        | 0.000 (0.000)    | 0.055 (0.006)    | 0 (0.000) |     3.33 | chucker, macke, p1ke, Rack, zeak     |
|            5 |     3579 | 2026-03-31 | NEW VISION       | L   | 0.367      | -            | -                | -                | -         |    -7.78 | chucker, hechtikal, king, Rack, zeak |
|            4 |     3737 | 2026-03-29 | ex-Zero Tenacity | L   | 0.354      | -            | -                | -                | -         |    -6.51 | chucker, king, p1ke, Rack, zeak      |
|            3 |     3957 | 2026-03-26 | Young Ninjas     | L   | 0.333      | -            | -                | -                | -         |    -6.36 | chucker, king, p1ke, Rack, zeak      |
|            2 |     3964 | 2026-03-26 | Alliance         | L   | 0.332      | -            | -                | -                | -         |    -0.14 | chucker, king, p1ke, Rack, zeak      |
|            1 |     5648 | 2026-02-21 | Bulgaria         | L   | 0.112      | -            | -                | -                | -         |    -0.17 | chucker, king, p1ke, Rack, zeak      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,295.81)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-27 |      0.954 | $4,203.00      | $4,010.04       |
| 2026-06-21 |      0.914 | $2,500.00      | $2,285.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
