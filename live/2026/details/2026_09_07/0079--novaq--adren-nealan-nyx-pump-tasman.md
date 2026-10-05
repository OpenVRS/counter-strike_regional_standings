### Roster Details<br />
Team Name: NOVAQ<br />
Roster: AdreN, neaLaN, nyx, Pump, tasman<br />
Global Rank: [79](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [60]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1019.6<br />
<br />
Final Rank Value (1019.6) = Starting Rank Value (988.8) + Head To Head Adjustments (30.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.389[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.485[<sup>2</sup>](#table1)

The average of these factors is 0.309<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 988.8
- 400 + ( ( 0.309 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 988.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       99 | 2026-09-03 | Rune Eaters | L   | 1.000      | -            | -                | -                | -         |   -14.65 | AdreN, neaLaN, nyx, Pump, tasman    |
|           13 |     1371 | 2026-07-26 | Rune Eaters | W   | 0.911      | 0.396        | 0.024 (0.009)    | 0.769 (0.278)    | 1 (0.911) |    15.40 | AdreN, neaLaN, nyx, Pump, tasman    |
|           12 |     1404 | 2026-07-25 | DEPO        | W   | 0.904      | 0.396        | 0.021 (0.008)    | 0.441 (0.158)    | 1 (0.904) |    19.06 | AdreN, neaLaN, nyx, Pump, tasman    |
|           11 |     1424 | 2026-07-25 | Omega       | W   | 0.902      | 0.396        | 0.027 (0.010)    | 0.397 (0.142)    | 1 (0.902) |    21.79 | AdreN, neaLaN, nyx, Pump, tasman    |
|           10 |     1429 | 2026-07-24 | Orda        | W   | 0.902      | 0.396        | 0.002 (0.001)    | 0.035 (0.013)    | 1 (0.902) |     4.24 | AdreN, neaLaN, nyx, Pump, tasman    |
|            9 |     2022 | 2026-06-25 | Rune Eaters | L   | 0.705      | -            | -                | -                | -         |    -8.23 | AdreN, kAlash, neaLaN, Pump, tasman |
|            8 |     2029 | 2026-06-25 | The Huns    | L   | 0.704      | -            | -                | -                | -         |   -14.81 | AdreN, kAlash, neaLaN, Pump, tasman |
|            7 |     2036 | 2026-06-25 | Rune Eaters | W   | 0.703      | 0.324        | 0.024 (0.005)    | 0.769 (0.175)    | 1 (0.703) |    13.82 | AdreN, kAlash, neaLaN, Pump, tasman |
|            6 |     4674 | 2026-04-02 | JUMBO       | L   | 0.142      | -            | -                | -                | -         |    -4.20 | def1zer, ICY, neaLaN, Pump, tasman  |
|            5 |     4767 | 2026-03-31 | K27         | L   | 0.135      | -            | -                | -                | -         |    -0.31 | def1zer, ICY, neaLaN, Pump, tasman  |
|            4 |     5723 | 2026-03-15 | ex-MANA     | L   | 0.026      | -            | -                | -                | -         |    -0.64 | def1zer, ICY, neaLaN, Pump, tasman  |
|            3 |     5745 | 2026-03-15 | Omega       | L   | 0.023      | -            | -                | -                | -         |    -0.13 | def1zer, ICY, neaLaN, Pump, tasman  |
|            2 |     5762 | 2026-03-14 | illwill     | L   | 0.019      | -            | -                | -                | -         |    -0.54 | def1zer, ICY, neaLaN, Pump, tasman  |
|            1 |     5857 | 2026-03-12 | HAVU        | W   | 0.006      | 0.384        | 0.004 (0.000)    | 0.373 (0.001)    | 0 (0.000) |     0.06 | def1zer, ICY, neaLaN, Pump, tasman  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,692.05)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-26 |      0.911 | $15,000.00     | $13,667.06      |
| 2026-03-15 |      0.026 | $500.00        | $12.90          |
| 2026-03-15 |      0.024 | $509.00        | $12.09          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
