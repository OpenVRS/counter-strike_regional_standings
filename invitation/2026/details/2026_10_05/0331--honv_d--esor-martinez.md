### Roster Details<br />
Team Name: Honvéd<br />
Roster: esor, marTineZ<br />
Global Rank: [331](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [221]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  514.5<br />
<br />
Final Rank Value (514.5) = Starting Rank Value (493.7) + Head To Head Adjustments (20.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 493.7
- 400 + ( ( 0.047 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 493.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      876 | 2026-09-16 | ENCE             | L   | 1.000      | -            | -                | -                | -         |    -2.07 | esor, iBALLY, marTineZ, noleN, sl3nd   |
|            4 |      971 | 2026-09-13 | Azuolas          | W   | 1.000      | 0.354        | 0.001 (0.000)    | 0.217 (0.077)    | 0 (0.000) |    28.71 | esor, fleav, iBALLY, marTineZ, zs0lt1  |
|            3 |     1996 | 2026-08-21 | Bushido Wildcats | L   | 0.900      | -            | -                | -                | -         |    -1.25 | esor, iBALLY, kszlim, marTineZ, noleN  |
|            2 |     2009 | 2026-08-20 | Falcons Force    | L   | 0.894      | -            | -                | -                | -         |    -3.23 | 1NSERT2, esor, kszlim, marTineZ, noleN |
|            1 |     2511 | 2026-08-02 | ex-RUSTEC        | L   | 0.773      | -            | -                | -                | -         |    -1.31 | 1NSERT2, esor, kszlim, marTineZ, noleN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
