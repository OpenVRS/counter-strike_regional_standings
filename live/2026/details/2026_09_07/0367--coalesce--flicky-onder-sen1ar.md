### Roster Details<br />
Team Name: Coalesce<br />
Roster: Flicky, onder, sen1ar<br />
Global Rank: [367](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [234]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  481.7<br />
<br />
Final Rank Value (481.7) = Starting Rank Value (477.5) + Head To Head Adjustments (4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.162[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 477.5
- 400 + ( ( 0.041 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 477.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      661 | 2026-08-20 | Ryvex       | L   | 1.000      | -            | -                | -                | -         |    -9.29 | BoZZo, cryths, Flicky, onder, sen1ar    |
|            4 |     1976 | 2026-06-29 | SINQU       | L   | 0.725      | -            | -                | -                | -         |    -3.33 | D1ntrIXxX, Fizzy, Flicky, onder, sen1ar |
|            3 |     1999 | 2026-06-28 | Aimhaus     | W   | 0.718      | 0.303        | 0.000 (0.000)    | 0.028 (0.006)    | 1 (0.718) |     9.82 | D1ntrIXxX, Fizzy, Flicky, onder, sen1ar |
|            2 |     2002 | 2026-06-28 | Leo         | L   | 0.718      | -            | -                | -                | -         |    -1.82 | D1ntrIXxX, Fizzy, Flicky, onder, sen1ar |
|            1 |     2006 | 2026-06-28 | GAMEHARMONY | W   | 0.718      | 0.303        | 0.000 (0.000)    | 0.003 (0.001)    | 1 (0.718) |     8.85 | D1ntrIXxX, Fizzy, Flicky, onder, sen1ar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
