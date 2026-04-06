### Roster Details<br />
Team Name: Falcons Force<br />
Roster: clockzi, grecu, Nucleonz, Tapewaare, VENO<br />
Global Rank: [175](../../standings_global_2026_04_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_05.md)<br />
Regional Rank: [119]( ../../standings_europe_2026_04_05.md)<br />
<br />
Final Rank Value:  797.2<br />
<br />
Final Rank Value (797.2) = Starting Rank Value (756.8) + Head To Head Adjustments (40.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.420[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 756.8
- 400 + ( ( 0.182 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 756.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.128
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      155 | 2026-04-02 | B8             | L   | 1.000      | -            | -                | -                | -         |    -0.63 | clockzi, grecu, Nucleonz, Tapewaare, VENO |
|           14 |      171 | 2026-04-01 | AaB esport     | W   | 1.000      | 0.341        | 0.000 (0.000)    | 0.706 (0.240)    | 1 (1.000) |    27.69 | clockzi, grecu, Nucleonz, Tapewaare, VENO |
|           13 |      198 | 2026-04-01 | WAZABI         | W   | 1.000      | 0.341        | 0.000 (0.000)    | 0.092 (0.031)    | 1 (1.000) |    14.50 | clockzi, grecu, Nucleonz, Tapewaare, VENO |
|           12 |      211 | 2026-04-01 | B8             | L   | 1.000      | -            | -                | -                | -         |    -0.47 | clockzi, grecu, Nucleonz, Tapewaare, VENO |
|           11 |      232 | 2026-03-31 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -1.03 | clockzi, grecu, Nucleonz, Tapewaare, VENO |
|           10 |      239 | 2026-03-31 | Atpūties       | W   | 1.000      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.74 | clockzi, grecu, Nucleonz, Tapewaare, VENO |
|            9 |      257 | 2026-03-31 | Sashi Academy  | W   | 1.000      | 0.341        | 0.000 (0.000)    | 0.031 (0.010)    | 1 (1.000) |     4.84 | clockzi, grecu, Nucleonz, Tapewaare, VENO |
|            8 |      264 | 2026-03-31 | 3DMAX          | L   | 1.000      | -            | -                | -                | -         |    -0.48 | clockzi, grecu, Nucleonz, Tapewaare, VENO |
|            7 |      277 | 2026-03-31 | AaB esport     | L   | 1.000      | -            | -                | -                | -         |    -3.66 | clockzi, grecu, Nucleonz, Tapewaare, VENO |
|            6 |     1731 | 2026-03-02 | JiJieHao       | L   | 0.965      | -            | -                | -                | -         |    -3.45 | clockzi, grecu, Nucleonz, Tapewaare, VENO |
|            5 |     4773 | 2025-11-07 | MOUZ NXT       | L   | 0.200      | -            | -                | -                | -         |    -0.32 | clockzi, grecu, Nucleonz, Olaie, VENO     |
|            4 |     4790 | 2025-11-07 | Ex-FUT Academy | L   | 0.200      | -            | -                | -                | -         |    -4.47 | clockzi, grecu, Nucleonz, Olaie, VENO     |
|            3 |     4808 | 2025-11-07 | EYEBALLERS     | L   | 0.199      | -            | -                | -                | -         |    -0.18 | clockzi, grecu, Nucleonz, Olaie, VENO     |
|            2 |     4823 | 2025-11-07 | MASONIC        | W   | 0.199      | 0.336        | 0.000 (0.000)    | 0.520 (0.035)    | 1 (0.199) |     5.16 | clockzi, grecu, Nucleonz, Olaie, VENO     |
|            1 |     4843 | 2025-11-07 | ENCE           | L   | 0.198      | -            | -                | -                | -         |    -0.88 | clockzi, grecu, Nucleonz, Olaie, VENO     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,159.25)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-02 |      1.000 | $1,159.25      | $1,159.25       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
