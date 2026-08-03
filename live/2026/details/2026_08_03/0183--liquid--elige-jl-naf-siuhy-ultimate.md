### Roster Details<br />
Team Name: Liquid<br />
Roster: EliGE, jL, NAF, siuhy, ultimate<br />
Global Rank: [183](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [129]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  775.3<br />
<br />
Final Rank Value (775.3) = Starting Rank Value (760.3) + Head To Head Adjustments (15.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.086[<sup>2</sup>](#table1)

The average of these factors is 0.186<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 760.3
- 400 + ( ( 0.186 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 760.3


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
|           13 |     1818 | 2026-05-19 | PARIVISION        | L   | 0.696      | -            | -                | -                | -         |    -0.11 | EliGE, flashie, NAF, siuhy, ultimate |
|           12 |     4511 | 2026-03-15 | Alliance          | L   | 0.261      | -            | -                | -                | -         |    -0.06 | EliGE, jL, NAF, siuhy, ultimate      |
|           11 |     4528 | 2026-03-15 | OG                | L   | 0.259      | -            | -                | -                | -         |    -1.58 | EliGE, jL, NAF, siuhy, ultimate      |
|           10 |     4574 | 2026-03-14 | EYEBALLERS        | W   | 0.252      | 0.350        | 0.141 (0.012)    | 0.385 (0.034)    | 1 (0.252) |     7.68 | EliGE, jL, NAF, siuhy, ultimate      |
|            9 |     4614 | 2026-03-13 | Gaimin Gladiators | L   | 0.246      | -            | -                | -                | -         |    -2.16 | EliGE, jL, NAF, siuhy, ultimate      |
|            8 |     4618 | 2026-03-13 | Famalicão         | L   | 0.246      | -            | -                | -                | -         |    -5.20 | EliGE, jL, NAF, siuhy, ultimate      |
|            7 |     4626 | 2026-03-13 | BESTIA            | W   | 0.245      | 0.350        | 0.019 (0.002)    | 0.652 (0.056)    | 1 (0.245) |     6.61 | EliGE, jL, NAF, siuhy, ultimate      |
|            6 |     4628 | 2026-03-13 | OlyBet            | W   | 0.245      | 0.350        | 0.001 (0.000)    | 0.115 (0.010)    | 1 (0.245) |     3.02 | EliGE, jL, NAF, siuhy, ultimate      |
|            5 |     5018 | 2026-03-05 | 3DMAX             | L   | 0.194      | -            | -                | -                | -         |    -0.12 | EliGE, NAF, NertZ, siuhy, ultimate   |
|            4 |     5057 | 2026-03-04 | M80               | W   | 0.188      | 0.613        | 0.072 (0.008)    | 0.644 (0.074)    | 0 (0.000) |     5.65 | EliGE, NAF, NertZ, siuhy, ultimate   |
|            3 |     5129 | 2026-03-03 | SemperFi          | W   | 0.180      | 0.613        | 0.005 (0.001)    | 0.196 (0.022)    | 0 (0.000) |     3.72 | EliGE, NAF, NertZ, siuhy, ultimate   |
|            2 |     5155 | 2026-03-02 | Gaimin Gladiators | L   | 0.175      | -            | -                | -                | -         |    -1.47 | EliGE, NAF, NertZ, siuhy, ultimate   |
|            1 |     5197 | 2026-03-01 | Passion UA        | L   | 0.168      | -            | -                | -                | -         |    -0.99 | EliGE, NAF, NertZ, siuhy, ultimate   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,813.55)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      0.725 | $10,000.00     | $7,247.97       |
| 2026-03-15 |      0.262 | $1,162.00      | $303.96         |
| 2026-03-05 |      0.194 | $6,500.00      | $1,261.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
