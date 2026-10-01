### Roster Details<br />
Team Name: 6666<br />
Roster: auth0ri, m4d4ra, rickangel, skcH<br />
Global Rank: [385](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [239]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  448.6<br />
<br />
Final Rank Value (448.6) = Starting Rank Value (448.4) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.025<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 448.4
- 400 + ( ( 0.025 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 448.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      753 | 2026-06-28 | BERG           | L   | 0.961      | -            | -                | -                | -         |    -2.60 | auth0ri, dENZY, m4d4ra, rickangel, skcH |
|            5 |      755 | 2026-06-28 | SINQU          | L   | 0.960      | -            | -                | -                | -         |    -2.93 | auth0ri, dENZY, m4d4ra, rickangel, skcH |
|            4 |      759 | 2026-06-28 | ASTRAL         | L   | 0.960      | -            | -                | -                | -         |    -1.38 | auth0ri, dENZY, m4d4ra, rickangel, skcH |
|            3 |     1002 | 2026-06-13 | Alliance       | L   | 0.860      | -            | -                | -                | -         |    -0.06 | auth0ri, fix, m4d4ra, rickangel, skcH   |
|            2 |     1020 | 2026-06-13 | Minkens finest | W   | 0.859      | 0.373        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.859) |    11.47 | auth0ri, fix, m4d4ra, rickangel, skcH   |
|            1 |     1031 | 2026-06-13 | aimclub        | L   | 0.858      | -            | -                | -                | -         |    -4.32 | auth0ri, fix, m4d4ra, rickangel, skcH   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
