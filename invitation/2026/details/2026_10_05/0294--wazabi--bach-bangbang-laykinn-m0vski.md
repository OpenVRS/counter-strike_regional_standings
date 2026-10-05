### Roster Details<br />
Team Name: WAZABI<br />
Roster: BacH, BangBang, Laykinn, m0vski<br />
Global Rank: [294](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [195]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  582.5<br />
<br />
Final Rank Value (582.5) = Starting Rank Value (597.2) + Head To Head Adjustments (-14.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.200[<sup>1</sup>](#table2)
- Bounty Collected: 0.176[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.015[<sup>2</sup>](#table1)

The average of these factors is 0.099<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 597.2
- 400 + ( ( 0.099 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 597.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     1261 | 2026-09-08 | Bushido Wildcats | L   | 1.000      | -            | -                | -                | -         |    -2.78 | BacH, BangBang, m0vski, No1r, SaMsInG     |
|           12 |     1270 | 2026-09-07 | G2 Ares          | L   | 1.000      | -            | -                | -                | -         |    -4.28 | BacH, BangBang, m0vski, No1r, SaMsInG     |
|           11 |     3968 | 2026-05-30 | Drip Too Hard    | L   | 0.346      | -            | -                | -                | -         |    -3.83 | BacH, BangBang, Bukhavez, Laykinn, m0vski |
|           10 |     4014 | 2026-05-29 | Drama            | L   | 0.338      | -            | -                | -                | -         |    -2.34 | BacH, BangBang, Laykinn, m0vski, mAnGo    |
|            9 |     4049 | 2026-05-28 | Drip Too Hard    | W   | 0.333      | 0.384        | 0.001 (0.000)    | 0.205 (0.026)    | 0 (0.000) |     6.59 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            8 |     4059 | 2026-05-28 | Project 91       | L   | 0.332      | -            | -                | -                | -         |    -6.96 | BacH, BangBang, Laykinn, m0vski, mAnGo    |
|            7 |     4212 | 2026-05-24 | Entropy          | L   | 0.306      | -            | -                | -                | -         |    -1.91 | BacH, BangBang, Laykinn, m0vski, mAnGo    |
|            6 |     5187 | 2026-04-26 | MASONIC          | L   | 0.119      | -            | -                | -                | -         |    -0.94 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            5 |     5216 | 2026-04-25 | IMA PROBLEM      | W   | 0.115      | 0.322        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.115) |     0.90 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            4 |     5544 | 2026-04-12 | Entropy          | L   | 0.027      | -            | -                | -                | -         |    -0.17 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            3 |     5546 | 2026-04-12 | EAC              | L   | 0.026      | -            | -                | -                | -         |    -0.05 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            2 |     5566 | 2026-04-11 | Entropy          | W   | 0.020      | 0.341        | 0.009 (0.000)    | 0.684 (0.005)    | 1 (0.020) |     0.51 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            1 |     5575 | 2026-04-11 | SAW Youngsters   | W   | 0.019      | 0.341        | 0.004 (0.000)    | 0.423 (0.003)    | 1 (0.019) |     0.50 | BacH, BangBang, Laykinn, m0vski, VireZ    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47.91)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-12 |      0.027 | $1,750.00      | $47.91          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
