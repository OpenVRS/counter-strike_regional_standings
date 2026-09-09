### Roster Details<br />
Team Name: Liquid<br />
Roster: EliGE, jL, NAF, siuhy, ultimate<br />
Global Rank: [253](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [171]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  648.3<br />
<br />
Final Rank Value (648.3) = Starting Rank Value (648.2) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.002[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 648.2
- 400 + ( ( 0.130 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 648.2


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
|            8 |     3053 | 2026-05-19 | PARIVISION        | L   | 0.456      | -            | -                | -                | -         |    -0.15 | EliGE, flashie, NAF, siuhy, ultimate |
|            7 |     5746 | 2026-03-15 | Alliance          | L   | 0.021      | -            | -                | -                | -         |    -0.01 | EliGE, jL, NAF, siuhy, ultimate      |
|            6 |     5763 | 2026-03-15 | OG                | L   | 0.019      | -            | -                | -                | -         |    -0.07 | EliGE, jL, NAF, siuhy, ultimate      |
|            5 |     5809 | 2026-03-14 | EYEBALLERS        | W   | 0.011      | 0.350        | 0.107 (0.000)    | 0.327 (0.001)    | 1 (0.011) |     0.35 | EliGE, jL, NAF, siuhy, ultimate      |
|            4 |     5849 | 2026-03-13 | Gaimin Gladiators | L   | 0.006      | -            | -                | -                | -         |    -0.07 | EliGE, jL, NAF, siuhy, ultimate      |
|            3 |     5853 | 2026-03-13 | Famalicão         | L   | 0.005      | -            | -                | -                | -         |    -0.12 | EliGE, jL, NAF, siuhy, ultimate      |
|            2 |     5861 | 2026-03-13 | BESTIA            | W   | 0.005      | 0.350        | 0.014 (0.000)    | 0.475 (0.001)    | 1 (0.005) |     0.12 | EliGE, jL, NAF, siuhy, ultimate      |
|            1 |     5863 | 2026-03-13 | OlyBet            | W   | 0.004      | 0.350        | 0.000 (0.000)    | 0.039 (0.000)    | 1 (0.004) |     0.06 | EliGE, jL, NAF, siuhy, ultimate      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,864.94)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      0.484 | $10,000.00     | $4,840.70       |
| 2026-03-15 |      0.021 | $1,162.00      | $24.24          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
