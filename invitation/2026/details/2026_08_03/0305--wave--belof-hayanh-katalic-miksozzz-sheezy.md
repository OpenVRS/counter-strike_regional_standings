### Roster Details<br />
Team Name: Wave<br />
Roster: Belof, hayanh, Katalic, miksozzz, sheezy<br />
Global Rank: [305](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [198]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  609.5<br />
<br />
Final Rank Value (609.5) = Starting Rank Value (617.4) + Head To Head Adjustments (-7.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.214[<sup>1</sup>](#table2)
- Bounty Collected: 0.159[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 617.4
- 400 + ( ( 0.112 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 617.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     4115 | 2026-03-23 | OlyBet      | L   | 0.314      | -            | -                | -                | -         |    -3.91 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            7 |     4120 | 2026-03-23 | MTX         | L   | 0.314      | -            | -                | -                | -         |    -5.45 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            6 |     4125 | 2026-03-23 | ASTRAL      | L   | 0.314      | -            | -                | -                | -         |    -0.34 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            5 |     4882 | 2026-03-08 | Lilmix      | L   | 0.213      | -            | -                | -                | -         |    -2.96 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            4 |     4898 | 2026-03-08 | BIG Academy | W   | 0.213      | 0.303        | 0.000 (0.000)    | 0.403 (0.026)    | 1 (0.213) |     3.49 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            3 |     4910 | 2026-03-08 | LEO         | W   | 0.212      | 0.303        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.212) |     2.41 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            2 |     4935 | 2026-03-07 | megoshort   | L   | 0.207      | -            | -                | -                | -         |    -2.65 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            1 |     4950 | 2026-03-07 | Z7          | W   | 0.205      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.205) |     1.48 | Belof, hayanh, Katalic, miksozzz, sheezy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($107.37)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-08 |      0.215 | $500.00        | $107.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
