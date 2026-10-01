### Roster Details<br />
Team Name: MARKandLARRY<br />
Roster: BRACE, micalis, Roflko, yourwombat, zeph<br />
Global Rank: [295](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [34]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  619.7<br />
<br />
Final Rank Value (619.7) = Starting Rank Value (624.1) + Head To Head Adjustments (-4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.238[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 624.1
- 400 + ( ( 0.116 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 624.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      940 | 2026-06-16 | DXA         | L   | 0.878      | -            | -                | -                | -         |   -14.09 | BRACE, micalis, Roflko, yourwombat, zeph |
|           12 |      957 | 2026-06-15 | Ground Zero | L   | 0.871      | -            | -                | -                | -         |    -3.69 | BRACE, micalis, Roflko, yourwombat, zeph |
|           11 |     1066 | 2026-06-12 | Abyssal     | W   | 0.852      | 0.306        | 0.003 (0.001)    | 0.210 (0.055)    | 0 (0.000) |    15.98 | BRACE, micalis, Roflko, yourwombat, zeph |
|           10 |     1121 | 2026-06-09 | MGLBROS     | W   | 0.831      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.68 | BRACE, micalis, Roflko, yourwombat, zeph |
|            9 |     1142 | 2026-06-08 | Rooster     | L   | 0.825      | -            | -                | -                | -         |    -7.59 | BRACE, micalis, Roflko, yourwombat, zeph |
|            8 |     2402 | 2026-04-30 | FURY        | L   | 0.565      | -            | -                | -                | -         |   -11.51 | BRACE, micalis, Roflko, yourwombat, zeph |
|            7 |     2452 | 2026-04-29 | Ground Zero | L   | 0.558      | -            | -                | -                | -         |    -2.12 | BRACE, micalis, Roflko, yourwombat, zeph |
|            6 |     2538 | 2026-04-27 | Rooster     | W   | 0.545      | 0.278        | 0.008 (0.001)    | 0.379 (0.057)    | 0 (0.000) |    12.60 | BRACE, micalis, Roflko, yourwombat, zeph |
|            5 |     4072 | 2026-03-24 | Mindfreak   | L   | 0.319      | -            | -                | -                | -         |    -4.12 | BRACE, micalis, Roflko, yourwombat, zeph |
|            4 |     4150 | 2026-03-23 | Skele       | W   | 0.312      | 0.278        | 0.000 (0.000)    | 0.037 (0.003)    | 0 (0.000) |     3.32 | BRACE, micalis, sav, yourwombat, zeph    |
|            3 |     4197 | 2026-03-22 | BBBMBCBS    | W   | 0.305      | 0.278        | 0.000 (0.000)    | 0.036 (0.003)    | 0 (0.000) |     2.92 | BRACE, micalis, Roflko, yourwombat, zeph |
|            2 |     4256 | 2026-03-21 | Mindfreak   | L   | 0.299      | -            | -                | -                | -         |    -3.82 | BRACE, micalis, Roflko, sav, yourwombat  |
|            1 |     4322 | 2026-03-20 | JFT         | W   | 0.291      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.02 | BRACE, micalis, Roflko, yourwombat, zeph |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($318.32)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-18 |      0.892 | $357.00        | $318.32         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
