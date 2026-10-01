### Roster Details<br />
Team Name: Washed<br />
Roster: ANSG1, kiR, kroK, Lucky, suma<br />
Global Rank: [125](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [89]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  916.9<br />
<br />
Final Rank Value (916.9) = Starting Rank Value (881.7) + Head To Head Adjustments (35.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.399[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 881.7
- 400 + ( ( 0.249 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 881.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      995 | 2026-06-13 | MASONIC       | W   | 0.861      | 0.357        | 0.010 (0.003)    | 0.418 (0.128)    | 1 (0.861) |    15.52 | ANSG1, kiR, kroK, Lucky, suma |
|            4 |     1016 | 2026-06-13 | MASQ          | W   | 0.859      | 0.357        | 0.001 (0.000)    | 0.080 (0.025)    | 1 (0.859) |     8.76 | ANSG1, kiR, kroK, Lucky, suma |
|            3 |     1032 | 2026-06-13 | Sashi Academy | W   | 0.858      | 0.357        | 0.002 (0.001)    | 0.160 (0.049)    | 1 (0.858) |    10.66 | ANSG1, kiR, kroK, Lucky, suma |
|            2 |     1046 | 2026-06-12 | STATE         | L   | 0.854      | -            | -                | -                | -         |    -5.66 | ANSG1, kiR, kroK, Lucky, suma |
|            1 |     1056 | 2026-06-12 | Invicta       | W   | 0.853      | 0.357        | 0.001 (0.000)    | 0.034 (0.010)    | 1 (0.853) |     6.01 | ANSG1, kiR, kroK, Lucky, suma |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,108.54)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      0.861 | $7,097.00      | $6,108.54       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
