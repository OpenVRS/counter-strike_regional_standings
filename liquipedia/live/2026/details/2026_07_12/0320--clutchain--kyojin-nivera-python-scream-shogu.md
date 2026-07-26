### Roster Details<br />
Team Name: Clutchain<br />
Roster: Kyojin, Nivera, Python, ScreaM, SHOGU<br />
Global Rank: [320](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [200]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  555.1<br />
<br />
Final Rank Value (555.1) = Starting Rank Value (529.4) + Head To Head Adjustments (25.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 529.4
- 400 + ( ( 0.068 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 529.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.086
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      590 | 2026-06-08 | XI Esport          | L   | 0.972      | -            | -                | -                | -         |   -11.21 | Kyojin, Nivera, Python, ScreaM, SHOGU         |
|            8 |      670 | 2026-06-05 | VP.Prodigy         | W   | 0.952      | 0.143        | 0.000 (0.000)    | 0.108 (0.015)    | 0 (0.000) |    15.65 | Kyojin, Nivera, Python, ScreaM, SHOGU         |
|            7 |     1973 | 2026-04-27 | Walczaki           | L   | 0.692      | -            | -                | -                | -         |    -0.73 | Kyojin, Nivera, Python, ScreaM, SHOGU         |
|            6 |     2172 | 2026-04-24 | Los kogutos        | W   | 0.671      | 0.362        | 0.019 (0.005)    | 0.940 (0.229)    | 0 (0.000) |    18.23 | Kyojin, Nivera, Python, ScreaM, SHOGU         |
|            5 |     2288 | 2026-04-19 | UNiTY esports      | L   | 0.638      | -            | -                | -                | -         |    -3.73 | Kyojin, Nivera, Python, ScreaM, SHOGU         |
|            4 |     2361 | 2026-04-15 | SINNERS Esports    | L   | 0.611      | -            | -                | -                | -         |    -0.31 | Kyojin, Nivera, Python, ScreaM, SHOGU         |
|            3 |     2396 | 2026-04-13 | MOUZ NXT           | W   | 0.598      | 0.362        | 0.009 (0.002)    | 0.477 (0.103)    | 0 (0.000) |    17.09 | Kyojin, Nivera, Python, ScreaM, SHOGU         |
|            2 |     4250 | 2026-03-09 | LFO (Turkish team) | L   | 0.365      | -            | -                | -                | -         |    -7.68 | Gauthierlele, Kyojin, Nivera, Red1many, SHOGU |
|            1 |     4474 | 2026-03-05 | The Last Resort    | L   | 0.338      | -            | -                | -                | -         |    -1.61 | Gauthierlele, Kyojin, Nivera, Red1many, SHOGU |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
