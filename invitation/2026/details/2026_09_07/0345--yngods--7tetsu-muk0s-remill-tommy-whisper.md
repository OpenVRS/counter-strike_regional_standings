### Roster Details<br />
Team Name: yngods<br />
Roster: 7tetsu, Muk0s, Remill, tommy, whisper<br />
Global Rank: [345](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [222]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  515.2<br />
<br />
Final Rank Value (515.2) = Starting Rank Value (507.9) + Head To Head Adjustments (7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.9
- 400 + ( ( 0.057 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 507.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3935 | 2026-04-24 | Atreides         | L   | 0.286      | -            | -                | -                | -         |    -1.61 | 7tetsu, fozil, Muk0s, Remill, tommy   |
|           13 |     4003 | 2026-04-22 | aimclub          | L   | 0.274      | -            | -                | -                | -         |    -4.05 | 7tetsu, fozil, Muk0s, Remill, tommy   |
|           12 |     4463 | 2026-04-04 | Just Players     | L   | 0.153      | -            | -                | -                | -         |    -1.79 | 7tetsu, Muk0s, Remill, tommy, whisper |
|           11 |     4563 | 2026-04-03 | ex-RUSTEC        | W   | 0.146      | 0.384        | 0.018 (0.001)    | 0.908 (0.051)    | 0 (0.000) |     4.29 | 7tetsu, Muk0s, Remill, tommy, whisper |
|           10 |     4650 | 2026-04-02 | Privateer        | W   | 0.140      | 0.384        | 0.004 (0.000)    | 0.216 (0.012)    | 0 (0.000) |     3.49 | 7tetsu, Muk0s, Remill, tommy, whisper |
|            9 |     4759 | 2026-04-01 | Lilmix           | W   | 0.132      | 0.384        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.77 | 7tetsu, Muk0s, Remill, tommy, whisper |
|            8 |     4872 | 2026-03-31 | Fisher College   | W   | 0.125      | 0.384        | 0.020 (0.001)    | 0.119 (0.006)    | 0 (0.000) |     3.27 | 7tetsu, Muk0s, Remill, tommy, whisper |
|            7 |     4913 | 2026-03-30 | los kogutos      | L   | 0.120      | -            | -                | -                | -         |    -1.00 | 7tetsu, Muk0s, Remill, tommy, whisper |
|            6 |     4987 | 2026-03-29 | AKA HERO KAJO    | W   | 0.113      | 0.384        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.24 | 7tetsu, Muk0s, Remill, tommy, whisper |
|            5 |     5475 | 2026-03-21 | PsychoFace       | L   | 0.059      | -            | -                | -                | -         |    -0.16 | 7tetsu, Muk0s, Remill, tommy, whisper |
|            4 |     5577 | 2026-03-19 | home             | W   | 0.046      | 0.384        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.62 | 7tetsu, Muk0s, Remill, tommy, whisper |
|            3 |     5619 | 2026-03-18 | ex-Zero Tenacity | W   | 0.039      | 0.384        | 0.031 (0.000)    | 1.000 (0.015)    | 0 (0.000) |     1.13 | 7tetsu, Muk0s, Remill, tommy, whisper |
|            2 |     5786 | 2026-03-14 | PsychoFace       | L   | 0.014      | -            | -                | -                | -         |    -0.04 | 7tetsu, azukay, Muk0s, Remill, xm1nd  |
|            1 |     5833 | 2026-03-13 | megoshort        | W   | 0.007      | 0.143        | 0.000 (0.000)    | 0.023 (0.000)    | 0 (0.000) |     0.11 | 7tetsu, azukay, Muk0s, Remill, xm1nd  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
