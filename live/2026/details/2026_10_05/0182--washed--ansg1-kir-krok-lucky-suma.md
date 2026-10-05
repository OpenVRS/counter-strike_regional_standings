### Roster Details<br />
Team Name: Washed<br />
Roster: ANSG1, kiR, kroK, Lucky, suma<br />
Global Rank: [182](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [133]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  767.0<br />
<br />
Final Rank Value (767.0) = Starting Rank Value (746.8) + Head To Head Adjustments (20.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.175[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 746.8
- 400 + ( ( 0.173 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 746.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3582 | 2026-06-13 | MASONIC          | W   | 0.441      | 0.357        | 0.004 (0.001)    | 0.116 (0.018)    | 1 (0.441) |     7.87 | ANSG1, kiR, kroK, Lucky, suma |
|            4 |     3603 | 2026-06-13 | MASQ             | W   | 0.439      | 0.357        | 0.001 (0.000)    | 0.030 (0.005)    | 1 (0.439) |     5.43 | ANSG1, kiR, kroK, Lucky, suma |
|            3 |     3619 | 2026-06-13 | ex-Sashi Academy | W   | 0.438      | 0.357        | 0.001 (0.000)    | 0.133 (0.021)    | 1 (0.438) |     6.10 | ANSG1, kiR, kroK, Lucky, suma |
|            2 |     3633 | 2026-06-12 | STATE            | L   | 0.435      | -            | -                | -                | -         |    -3.61 | ANSG1, kiR, kroK, Lucky, suma |
|            1 |     3643 | 2026-06-12 | Invicta          | W   | 0.434      | 0.357        | 0.001 (0.000)    | 0.010 (0.002)    | 1 (0.434) |     4.47 | ANSG1, kiR, kroK, Lucky, suma |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,129.53)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      0.441 | $7,097.00      | $3,129.53       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
