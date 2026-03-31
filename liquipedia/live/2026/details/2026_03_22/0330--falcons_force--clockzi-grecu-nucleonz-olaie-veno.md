### Roster Details<br />
Team Name: Falcons Force<br />
Roster: clockzi, grecu, Nucleonz, Olaie, VENO<br />
Global Rank: [330](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [194]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  422.7<br />
<br />
Final Rank Value (422.7) = Starting Rank Value (418.0) + Head To Head Adjustments (4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.030[<sup>2</sup>](#table1)

The average of these factors is 0.009<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 418.0
- 400 + ( ( 0.009 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 418.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.010
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      780 | 2026-03-02 | JiJieHao       | L   | 1.000      | -            | -                | -                | -         |    -0.81 | clockzi, grecu, Nucleonz, Tapewaare, VENO |
|            5 |     3822 | 2025-11-07 | MOUZ NXT       | L   | 0.298      | -            | -                | -                | -         |    -0.07 | clockzi, grecu, Nucleonz, Olaie, VENO     |
|            4 |     3839 | 2025-11-07 | Ex-FUT Academy | L   | 0.298      | -            | -                | -                | -         |    -3.40 | clockzi, grecu, Nucleonz, Olaie, VENO     |
|            3 |     3857 | 2025-11-07 | EYEBALLERS     | L   | 0.297      | -            | -                | -                | -         |    -0.07 | clockzi, grecu, Nucleonz, Olaie, VENO     |
|            2 |     3872 | 2025-11-07 | MASONIC        | W   | 0.297      | 0.336        | 0.000 (0.000)    | 0.646 (0.064)    | 1 (0.297) |     9.13 | clockzi, grecu, Nucleonz, Olaie, VENO     |
|            1 |     3892 | 2025-11-07 | ENCE           | L   | 0.296      | -            | -                | -                | -         |    -0.15 | clockzi, grecu, Nucleonz, Olaie, VENO     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
