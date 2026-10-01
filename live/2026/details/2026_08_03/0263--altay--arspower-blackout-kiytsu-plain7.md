### Roster Details<br />
Team Name: ALTAY<br />
Roster: ARSPOWER, Blackout, kiytsu, Plain7<br />
Global Rank: [263](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [172]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  661.2<br />
<br />
Final Rank Value (661.2) = Starting Rank Value (687.6) + Head To Head Adjustments (-26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.116[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.6
- 400 + ( ( 0.149 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 687.6


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
|            5 |       36 | 2026-08-01 | RayRay      | L   | 1.000      | -            | -                | -                | -         |   -15.32 | ARSPOWER, Blackout, kiytsu, nyx, Plain7  |
|            4 |       43 | 2026-08-01 | DONSTU      | L   | 1.000      | -            | -                | -                | -         |   -13.25 | ARSPOWER, Blackout, kiytsu, nyx, Plain7  |
|            3 |      213 | 2026-07-25 | DEPO        | L   | 1.000      | -            | -                | -                | -         |    -2.87 | ARSPOWER, Blackout, hase, kiytsu, Plain7 |
|            2 |      220 | 2026-07-25 | ZWAW        | W   | 1.000      | 0.396        | 0.003 (0.001)    | 0.000 (0.000)    | 1 (1.000) |     9.15 | ARSPOWER, Blackout, hase, kiytsu, Plain7 |
|            1 |      229 | 2026-07-24 | Rune Eaters | L   | 1.000      | -            | -                | -                | -         |    -4.15 | ARSPOWER, Blackout, hase, kiytsu, Plain7 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,250.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      1.000 | $250.00        | $250.00         |
| 2026-07-26 |      1.000 | $1,000.00      | $1,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
