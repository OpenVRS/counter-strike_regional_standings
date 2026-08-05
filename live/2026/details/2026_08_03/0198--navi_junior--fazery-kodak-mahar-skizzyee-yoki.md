### Roster Details<br />
Team Name: NAVI Junior<br />
Roster: FAZERY, kodak, MahaR, skizzyee, yoki<br />
Global Rank: [198](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [138]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  752.5<br />
<br />
Final Rank Value (752.5) = Starting Rank Value (751.2) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.233[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 751.2
- 400 + ( ( 0.181 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 751.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      131 | 2026-07-28 | ASTRAL    | L   | 1.000      | -            | -                | -                | -         |    -6.34 | FAZERY, kodak, MahaR, skizzyee, yoki |
|            4 |      141 | 2026-07-27 | MOUZ NXT  | W   | 1.000      | 0.303        | 0.005 (0.002)    | 0.457 (0.139)    | 1 (1.000) |    20.82 | FAZERY, kodak, MahaR, skizzyee, yoki |
|            3 |      146 | 2026-07-27 | LEO       | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     6.37 | FAZERY, kodak, MahaR, skizzyee, yoki |
|            2 |      149 | 2026-07-27 | BRUTE     | L   | 1.000      | -            | -                | -                | -         |    -4.79 | FAZERY, kodak, MahaR, skizzyee, yoki |
|            1 |      899 | 2026-06-19 | Fire Flux | L   | 0.901      | -            | -                | -                | -         |   -14.79 | FAZERY, kodak, MahaR, skizzyee, yoki |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($914.31)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      0.914 | $1,000.00      | $914.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
