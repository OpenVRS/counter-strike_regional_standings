### Roster Details<br />
Team Name: CTRL<br />
Roster: AliBond, godkU, Rhyza<br />
Global Rank: [321](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [205]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  586.8<br />
<br />
Final Rank Value (586.8) = Starting Rank Value (598.7) + Head To Head Adjustments (-11.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.156[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.103<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 598.7
- 400 + ( ( 0.103 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 598.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      377 | 2026-07-18 | Glitchtech UK   | L   | 1.000      | -            | -                | -                | -         |    -9.58 | AliBond, Finui, godkU, Rhyza, Xetherato   |
|            5 |      384 | 2026-07-18 | The Last Resort | L   | 1.000      | -            | -                | -                | -         |    -3.52 | AliBond, Finui, godkU, Rhyza, Xetherato   |
|            4 |     4232 | 2026-03-21 | The Last Resort | L   | 0.300      | -            | -                | -                | -         |    -0.75 | AliBond, godkU, M1n1maL, MrObvious, Rhyza |
|            3 |     5157 | 2026-03-02 | Voracity        | W   | 0.175      | 0.265        | 0.001 (0.000)    | 0.099 (0.005)    | 0 (0.000) |     3.19 | AliBond, godkU, M1n1maL, MrObvious, Rhyza |
|            2 |     5600 | 2026-02-22 | Privateer       | L   | 0.118      | -            | -                | -                | -         |    -0.88 | AliBond, godkU, M1n1maL, MrObvious, Rhyza |
|            1 |     5620 | 2026-02-21 | The Last Resort | L   | 0.114      | -            | -                | -                | -         |    -0.28 | AliBond, godkU, M1n1maL, MrObvious, Rhyza |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($563.60)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-19 |      1.000 | $134.00        | $134.00         |
| 2026-03-21 |      0.300 | $1,081.00      | $324.62         |
| 2026-02-22 |      0.120 | $876.00        | $104.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
