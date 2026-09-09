### Roster Details<br />
Team Name: Washed<br />
Roster: ANSG1, kiR, kroK, Lucky, suma<br />
Global Rank: [140](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [107]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  821.4<br />
<br />
Final Rank Value (821.4) = Starting Rank Value (794.7) + Head To Head Adjustments (26.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.279[<sup>2</sup>](#table1)

The average of these factors is 0.207<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 794.7
- 400 + ( ( 0.207 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 794.7


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
|            5 |     2230 | 2026-06-13 | MASONIC          | W   | 0.620      | 0.357        | 0.006 (0.001)    | 0.207 (0.046)    | 1 (0.620) |    11.66 | ANSG1, kiR, kroK, Lucky, suma |
|            4 |     2251 | 2026-06-13 | MASQ             | W   | 0.618      | 0.357        | 0.001 (0.000)    | 0.048 (0.011)    | 1 (0.618) |     7.13 | ANSG1, kiR, kroK, Lucky, suma |
|            3 |     2267 | 2026-06-13 | ex-Sashi Academy | W   | 0.617      | 0.357        | 0.001 (0.000)    | 0.188 (0.041)    | 1 (0.617) |     7.45 | ANSG1, kiR, kroK, Lucky, suma |
|            2 |     2281 | 2026-06-12 | STATE            | L   | 0.614      | -            | -                | -                | -         |    -4.97 | ANSG1, kiR, kroK, Lucky, suma |
|            1 |     2291 | 2026-06-12 | Invicta          | W   | 0.613      | 0.357        | 0.001 (0.000)    | 0.019 (0.004)    | 1 (0.613) |     5.44 | ANSG1, kiR, kroK, Lucky, suma |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,400.10)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      0.620 | $7,097.00      | $4,400.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
