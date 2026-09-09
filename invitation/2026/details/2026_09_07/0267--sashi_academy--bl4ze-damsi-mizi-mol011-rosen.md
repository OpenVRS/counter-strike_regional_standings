### Roster Details<br />
Team Name: Sashi Academy<br />
Roster: Bl4zE, Damsi, Mizi, Mol011, rosen<br />
Global Rank: [267](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [179]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  634.8<br />
<br />
Final Rank Value (634.8) = Starting Rank Value (633.9) + Head To Head Adjustments (1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.231[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 633.9
- 400 + ( ( 0.123 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 633.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3837 | 2026-04-26 | STATE          | L   | 0.298      | -            | -                | -                | -         |    -1.24 | Bl4zE, Damsi, GA1De, Mizi, Mol011 |
|            7 |     3865 | 2026-04-25 | Invicta        | W   | 0.294      | 0.322        | 0.001 (0.000)    | 0.019 (0.002)    | 1 (0.294) |     4.61 | Bl4zE, Damsi, GA1De, Mizi, Mol011 |
|            6 |     4068 | 2026-04-19 | XI             | L   | 0.252      | -            | -                | -                | -         |    -4.18 | Bl4zE, Damsi, Mizi, Mol011, Viggo |
|            5 |     4080 | 2026-04-19 | INFINITE       | L   | 0.251      | -            | -                | -                | -         |    -0.31 | Bl4zE, Damsi, Mizi, Mol011, rosen |
|            4 |     4197 | 2026-04-12 | Entropy        | L   | 0.204      | -            | -                | -                | -         |    -2.98 | Bl4zE, Damsi, Mizi, Mol011, rosen |
|            3 |     4210 | 2026-04-11 | SAW Youngsters | W   | 0.200      | 0.341        | 0.002 (0.000)    | 0.471 (0.032)    | 1 (0.200) |     4.06 | Bl4zE, Damsi, Mizi, Mol011, rosen |
|            2 |     4215 | 2026-04-11 | EAC            | L   | 0.199      | -            | -                | -                | -         |    -0.31 | Bl4zE, Damsi, Mizi, Mol011, rosen |
|            1 |     4225 | 2026-04-11 | Eclipse        | W   | 0.197      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.197) |     1.32 | Bl4zE, Damsi, Mizi, Mol011, rosen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($240.67)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-12 |      0.206 | $1,166.00      | $240.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
