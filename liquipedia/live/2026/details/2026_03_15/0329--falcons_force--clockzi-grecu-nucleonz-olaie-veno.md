### Roster Details<br />
Team Name: Falcons Force<br />
Roster: clockzi, grecu, Nucleonz, Olaie, VENO<br />
Global Rank: [329](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [194]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  425.9<br />
<br />
Final Rank Value (425.9) = Starting Rank Value (420.5) + Head To Head Adjustments (5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.010<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 420.5
- 400 + ( ( 0.010 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 420.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.011
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      608 | 2026-03-02 | JiJieHao       | L   | 1.000      | -            | -                | -                | -         |    -0.90 | clockzi, grecu, Nucleonz, Tapewaare, VENO |
|            5 |     3647 | 2025-11-07 | MOUZ NXT       | L   | 0.346      | -            | -                | -                | -         |    -0.09 | clockzi, grecu, Nucleonz, Olaie, VENO     |
|            4 |     3664 | 2025-11-07 | Ex-FUT Academy | L   | 0.345      | -            | -                | -                | -         |    -3.98 | clockzi, grecu, Nucleonz, Olaie, VENO     |
|            3 |     3682 | 2025-11-07 | EYEBALLERS     | L   | 0.345      | -            | -                | -                | -         |    -0.09 | clockzi, grecu, Nucleonz, Olaie, VENO     |
|            2 |     3697 | 2025-11-07 | MASONIC        | W   | 0.345      | 0.336        | 0.000 (0.000)    | 0.639 (0.074)    | 1 (0.345) |    10.58 | clockzi, grecu, Nucleonz, Olaie, VENO     |
|            1 |     3717 | 2025-11-07 | ENCE           | L   | 0.344      | -            | -                | -                | -         |    -0.15 | clockzi, grecu, Nucleonz, Olaie, VENO     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
