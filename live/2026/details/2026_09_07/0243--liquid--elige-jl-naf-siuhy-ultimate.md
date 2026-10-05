### Roster Details<br />
Team Name: Liquid<br />
Roster: EliGE, jL, NAF, siuhy, ultimate<br />
Global Rank: [243](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [165]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  652.5<br />
<br />
Final Rank Value (652.5) = Starting Rank Value (652.2) + Head To Head Adjustments (0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.004[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 652.2
- 400 + ( ( 0.133 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 652.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3025 | 2026-05-19 | PARIVISION        | L   | 0.461      | -            | -                | -                | -         |    -0.16 | EliGE, flashie, NAF, siuhy, ultimate |
|            7 |     5718 | 2026-03-15 | Alliance          | L   | 0.026      | -            | -                | -                | -         |    -0.01 | EliGE, jL, NAF, siuhy, ultimate      |
|            6 |     5735 | 2026-03-15 | OG                | L   | 0.024      | -            | -                | -                | -         |    -0.09 | EliGE, jL, NAF, siuhy, ultimate      |
|            5 |     5781 | 2026-03-14 | EYEBALLERS        | W   | 0.017      | 0.350        | 0.108 (0.001)    | 0.330 (0.002)    | 1 (0.017) |     0.52 | EliGE, jL, NAF, siuhy, ultimate      |
|            4 |     5821 | 2026-03-13 | Gaimin Gladiators | L   | 0.011      | -            | -                | -                | -         |    -0.14 | EliGE, jL, NAF, siuhy, ultimate      |
|            3 |     5825 | 2026-03-13 | Famalicão         | L   | 0.011      | -            | -                | -                | -         |    -0.24 | EliGE, jL, NAF, siuhy, ultimate      |
|            2 |     5833 | 2026-03-13 | BESTIA            | W   | 0.010      | 0.350        | 0.014 (0.000)    | 0.478 (0.002)    | 1 (0.010) |     0.26 | EliGE, jL, NAF, siuhy, ultimate      |
|            1 |     5835 | 2026-03-13 | OlyBet            | W   | 0.010      | 0.350        | 0.000 (0.000)    | 0.040 (0.000)    | 1 (0.010) |     0.13 | EliGE, jL, NAF, siuhy, ultimate      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,925.95)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      0.490 | $10,000.00     | $4,895.36       |
| 2026-03-15 |      0.026 | $1,162.00      | $30.59          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
