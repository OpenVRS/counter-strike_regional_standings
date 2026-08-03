### Roster Details<br />
Team Name: WAZABI<br />
Roster: BacH, BangBang, Laykinn, m0vski, VireZ<br />
Global Rank: [175](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [123]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  803.2<br />
<br />
Final Rank Value (803.2) = Starting Rank Value (835.1) + Head To Head Adjustments (-31.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.292[<sup>2</sup>](#table1)

The average of these factors is 0.225<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 835.1
- 400 + ( ( 0.225 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 835.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1381 | 2026-05-30 | Young Ninjas   | L   | 0.765      | -            | -                | -                | -         |   -10.57 | BacH, BangBang, Bukhavez, Laykinn, m0vski |
|           17 |     1427 | 2026-05-29 | Atreides       | L   | 0.758      | -            | -                | -                | -         |   -10.13 | BacH, BangBang, Laykinn, m0vski, mAnGo    |
|           16 |     1462 | 2026-05-28 | Young Ninjas   | W   | 0.752      | 0.384        | 0.003 (0.001)    | 0.583 (0.169)    | 0 (0.000) |    12.03 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|           15 |     1472 | 2026-05-28 | Wampirki       | L   | 0.752      | -            | -                | -                | -         |   -18.71 | BacH, BangBang, Laykinn, m0vski, mAnGo    |
|           14 |     1625 | 2026-05-24 | Entropy        | L   | 0.725      | -            | -                | -                | -         |    -8.26 | BacH, BangBang, Laykinn, m0vski, mAnGo    |
|           13 |     2600 | 2026-04-26 | MASONIC        | L   | 0.538      | -            | -                | -                | -         |    -5.49 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|           12 |     2629 | 2026-04-25 | IMA PROBLEM    | W   | 0.534      | 0.322        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.534) |     1.29 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|           11 |     2957 | 2026-04-12 | Entropy        | L   | 0.446      | -            | -                | -                | -         |    -5.36 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|           10 |     2959 | 2026-04-12 | EAC            | L   | 0.445      | -            | -                | -                | -         |    -2.30 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            9 |     2979 | 2026-04-11 | Entropy        | W   | 0.440      | 0.341        | 0.004 (0.001)    | 0.823 (0.123)    | 1 (0.440) |     8.63 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            8 |     2988 | 2026-04-11 | SAW Youngsters | W   | 0.438      | 0.341        | 0.003 (0.000)    | 0.622 (0.093)    | 1 (0.438) |     6.62 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            7 |     3537 | 2026-04-01 | Falcons Force  | L   | 0.372      | -            | -                | -                | -         |    -6.96 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            6 |     3550 | 2026-04-01 | 3DMAX          | L   | 0.371      | -            | -                | -                | -         |    -0.36 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            5 |     3581 | 2026-03-31 | Z7             | W   | 0.367      | 0.340        | 0.000 (0.000)    | 0.017 (0.002)    | 1 (0.367) |     1.02 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            4 |     3592 | 2026-03-31 | maquinas       | W   | 0.367      | 0.340        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.367) |     0.88 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            3 |     3614 | 2026-03-31 | AM             | L   | 0.366      | -            | -                | -                | -         |    -3.56 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            2 |     3636 | 2026-03-31 | B8             | W   | 0.365      | 0.340        | 0.323 (0.040)    | 0.670 (0.083)    | 1 (0.365) |    11.40 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            1 |     3648 | 2026-03-31 | Phantom        | L   | 0.365      | -            | -                | -                | -         |    -2.04 | BacH, BangBang, Laykinn, m0vski, VireZ    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($782.48)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-12 |      0.447 | $1,750.00      | $782.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
