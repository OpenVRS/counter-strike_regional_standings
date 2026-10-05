### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: AiyvaN, ay0k, Flierax, Nikodeon, opdust<br />
Global Rank: [320](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [211]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  534.0<br />
<br />
Final Rank Value (534.0) = Starting Rank Value (518.3) + Head To Head Adjustments (15.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 518.3
- 400 + ( ( 0.059 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 518.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     4547 | 2026-05-14 | 1win          | L   | 0.238      | -            | -                | -                | -         |    -0.14 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           19 |     4600 | 2026-05-12 | Lavked        | L   | 0.228      | -            | -                | -                | -         |    -0.76 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           18 |     4657 | 2026-05-11 | INOX Division | L   | 0.219      | -            | -                | -                | -         |    -0.39 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           17 |     4699 | 2026-05-10 | BBL           | L   | 0.212      | -            | -                | -                | -         |    -0.04 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           16 |     4710 | 2026-05-09 | UNiTY         | W   | 0.208      | 0.384        | 0.021 (0.002)    | 0.660 (0.053)    | 0 (0.000) |     6.38 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           15 |     4748 | 2026-05-08 | AM            | W   | 0.199      | 0.435        | 0.001 (0.000)    | 0.031 (0.003)    | 0 (0.000) |     4.33 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           14 |     4760 | 2026-05-07 | Lavked        | L   | 0.193      | -            | -                | -                | -         |    -0.64 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           13 |     4802 | 2026-05-05 | Bebop         | W   | 0.178      | 0.384        | 0.000 (0.000)    | 0.082 (0.006)    | 0 (0.000) |     3.07 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           12 |     4812 | 2026-05-04 | Black Phoenix | L   | 0.173      | -            | -                | -                | -         |    -0.33 | ay0k, Flierax, lmbt, Nikodeon, opdust   |
|           11 |     5107 | 2026-04-27 | UNiTY         | L   | 0.127      | -            | -                | -                | -         |    -0.08 | ay0k, Flierax, lmbt, Nikodeon, opdust   |
|           10 |     5335 | 2026-04-23 | ECSTATIC      | W   | 0.100      | 0.363        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     1.41 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|            9 |     5371 | 2026-04-22 | Acend         | L   | 0.093      | -            | -                | -                | -         |    -0.05 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|            8 |     5401 | 2026-04-20 | CYBERSHOKE    | L   | 0.079      | -            | -                | -                | -         |    -0.05 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|            7 |     5411 | 2026-04-19 | EYEBALLERS    | L   | 0.074      | -            | -                | -                | -         |    -0.02 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|            6 |     5429 | 2026-04-19 | Black Phoenix | W   | 0.072      | 0.435        | 0.035 (0.001)    | 1.000 (0.031)    | 0 (0.000) |     2.12 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|            5 |     5461 | 2026-04-17 | ex-RUBY       | L   | 0.060      | -            | -                | -                | -         |    -0.36 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|            4 |     5499 | 2026-04-14 | Next Up       | W   | 0.041      | 0.363        | 0.000 (0.000)    | 0.034 (0.001)    | 0 (0.000) |     0.73 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|            3 |     5511 | 2026-04-14 | GenOne        | W   | 0.038      | 0.435        | 0.055 (0.001)    | 0.936 (0.016)    | 0 (0.000) |     1.20 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|            2 |     5522 | 2026-04-13 | Clutchain     | L   | 0.034      | -            | -                | -                | -         |    -0.59 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|            1 |     5550 | 2026-04-12 | ARCRED        | L   | 0.025      | -            | -                | -                | -         |    -0.16 | ay0k, Flierax, Nikodeon, opdust, xelex  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
