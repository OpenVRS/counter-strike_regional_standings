### Roster Details<br />
Team Name: ZOTIX<br />
Roster: byr9, EsD, kalyambys, xeNji<br />
Global Rank: [310](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [199]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  606.0<br />
<br />
Final Rank Value (606.0) = Starting Rank Value (606.8) + Head To Head Adjustments (-0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.252[<sup>1</sup>](#table2)
- Bounty Collected: 0.174[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 606.8
- 400 + ( ( 0.107 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 606.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1319 | 2026-05-31 | WBT        | L   | 0.774      | -            | -                | -                | -         |    -7.49 | byr9, EsD, kalyambys, oju, xeNji      |
|            4 |     1329 | 2026-05-31 | SNITKO     | W   | 0.773      | 0.274        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.76 | byr9, EsD, kalyambys, oju, xeNji      |
|            3 |     2972 | 2026-04-11 | Vexar      | L   | 0.441      | -            | -                | -                | -         |    -5.69 | byr9, EsD, kalyambys, Kingway0, xeNji |
|            2 |     3009 | 2026-04-10 | bankaPEPSI | W   | 0.434      | 0.278        | 0.001 (0.000)    | 0.114 (0.014)    | 0 (0.000) |     7.86 | byr9, EsD, kalyambys, Kingway0, xeNji |
|            1 |     3028 | 2026-04-09 | Enjoy      | L   | 0.428      | -            | -                | -                | -         |    -4.24 | byr9, EsD, kalyambys, Kingway0, xeNji |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($526.08)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      0.774 | $680.00        | $526.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
