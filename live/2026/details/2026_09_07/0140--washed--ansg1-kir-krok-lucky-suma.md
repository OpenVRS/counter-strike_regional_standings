### Roster Details<br />
Team Name: Washed<br />
Roster: ANSG1, kiR, kroK, Lucky, suma<br />
Global Rank: [140](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [107]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  822.2<br />
<br />
Final Rank Value (822.2) = Starting Rank Value (795.1) + Head To Head Adjustments (27.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.280[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 795.1
- 400 + ( ( 0.208 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 795.1


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
|            5 |     2202 | 2026-06-13 | MASONIC          | W   | 0.625      | 0.357        | 0.006 (0.001)    | 0.208 (0.046)    | 1 (0.625) |    11.85 | ANSG1, kiR, kroK, Lucky, suma |
|            4 |     2223 | 2026-06-13 | MASQ             | W   | 0.624      | 0.357        | 0.001 (0.000)    | 0.048 (0.011)    | 1 (0.624) |     7.19 | ANSG1, kiR, kroK, Lucky, suma |
|            3 |     2239 | 2026-06-13 | ex-Sashi Academy | W   | 0.623      | 0.357        | 0.001 (0.000)    | 0.188 (0.042)    | 1 (0.623) |     7.51 | ANSG1, kiR, kroK, Lucky, suma |
|            2 |     2253 | 2026-06-12 | STATE            | L   | 0.619      | -            | -                | -                | -         |    -4.97 | ANSG1, kiR, kroK, Lucky, suma |
|            1 |     2263 | 2026-06-12 | Invicta          | W   | 0.618      | 0.357        | 0.001 (0.000)    | 0.019 (0.004)    | 1 (0.618) |     5.48 | ANSG1, kiR, kroK, Lucky, suma |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,438.89)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      0.625 | $7,097.00      | $4,438.89       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
