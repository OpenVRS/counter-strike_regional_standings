### Roster Details<br />
Team Name: Four Magic<br />
Roster: GeGo, REL, sensey, statikS, XADE<br />
Global Rank: [193](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [141]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  736.8<br />
<br />
Final Rank Value (736.8) = Starting Rank Value (711.8) + Head To Head Adjustments (24.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.400[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 711.8
- 400 + ( ( 0.156 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 711.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      359 | 2026-09-26 | BRUTE           | L   | 1.000      | -            | -                | -                | -         |    -3.08 | GeGo, REL, sensey, statikS, XADE |
|            5 |      371 | 2026-09-26 | Optibet         | W   | 1.000      | 0.345        | 0.003 (0.001)    | 0.119 (0.041)    | 1 (1.000) |    12.85 | GeGo, REL, sensey, statikS, XADE |
|            4 |      463 | 2026-09-25 | HAVU            | L   | 1.000      | -            | -                | -                | -         |    -7.90 | GeGo, REL, sensey, statikS, XADE |
|            3 |      508 | 2026-09-24 | 95 Vikings      | W   | 1.000      | 0.345        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.79 | GeGo, REL, sensey, statikS, XADE |
|            2 |      527 | 2026-09-24 | INFINITE Talent | W   | 1.000      | 0.345        | 0.000 (0.000)    | 0.034 (0.012)    | 1 (1.000) |     5.74 | GeGo, REL, sensey, statikS, XADE |
|            1 |      602 | 2026-09-23 | Optibet         | W   | 1.000      | 0.345        | 0.003 (0.001)    | 0.119 (0.041)    | 1 (1.000) |    13.56 | GeGo, REL, sensey, statikS, XADE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
