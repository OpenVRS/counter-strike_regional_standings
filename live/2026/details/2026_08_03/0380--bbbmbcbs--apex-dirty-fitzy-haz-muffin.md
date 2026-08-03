### Roster Details<br />
Team Name: BBBMBCBS<br />
Roster: ApeX, Dirty, Fitzy, HaZ, muffin<br />
Global Rank: [380](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [44]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  466.4<br />
<br />
Final Rank Value (466.4) = Starting Rank Value (479.6) + Head To Head Adjustments (-13.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.163[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 479.6
- 400 + ( ( 0.041 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 479.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3202 | 2026-04-05 | Skele             | L   | 0.398      | -            | -                | -                | -         |    -7.51 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           13 |     3450 | 2026-04-02 | Ding Cuts         | W   | 0.379      | 0.278        | 0.001 (0.000)    | 0.112 (0.012)    | 0 (0.000) |     8.37 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           12 |     3465 | 2026-04-02 | Time Waves        | L   | 0.378      | -            | -                | -                | -         |    -7.09 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           11 |     4197 | 2026-03-22 | MARKandLARRY      | L   | 0.305      | -            | -                | -                | -         |    -2.92 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           10 |     4321 | 2026-03-20 | Muttley Crew      | L   | 0.291      | -            | -                | -                | -         |    -5.59 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            9 |     5488 | 2026-02-24 | Arcade            | L   | 0.131      | -            | -                | -                | -         |    -0.82 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            8 |     5603 | 2026-02-22 | Mindfreak         | L   | 0.118      | -            | -                | -                | -         |    -0.92 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            7 |     5651 | 2026-02-21 | Time Waves        | W   | 0.111      | 0.317        | 0.000 (0.000)    | 0.047 (0.002)    | 0 (0.000) |     1.38 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            6 |     5704 | 2026-02-20 | Shanghai Sharks   | W   | 0.105      | 0.317        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.28 | Arcay, Dirty, Fitzy, HaZ, muffin |
|            5 |     5706 | 2026-02-19 | Rooster           | L   | 0.104      | -            | -                | -                | -         |    -0.39 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            4 |     5801 | 2026-02-18 | FURY              | W   | 0.092      | 0.278        | 0.000 (0.000)    | 0.079 (0.002)    | 0 (0.000) |     1.54 | ApeX, Arcay, Fitzy, HaZ, muffin  |
|            3 |     5802 | 2026-02-18 | THUNDER dOWNUNDER | L   | 0.092      | -            | -                | -                | -         |    -0.05 | ApeX, Arcay, Fitzy, HaZ, muffin  |
|            2 |     5869 | 2026-02-17 | Exsto             | W   | 0.085      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.05 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            1 |     5871 | 2026-02-17 | Time Waves        | L   | 0.085      | -            | -                | -                | -         |    -1.62 | ApeX, Dirty, Fitzy, HaZ, muffin  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
