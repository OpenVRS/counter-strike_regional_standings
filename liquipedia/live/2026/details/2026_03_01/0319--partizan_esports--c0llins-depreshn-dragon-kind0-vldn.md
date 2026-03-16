### Roster Details<br />
Team Name: Partizan Esports<br />
Roster: c0llins, DEPRESHN, Dragon, Kind0, VLDN<br />
Global Rank: [319](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [187]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  469.5<br />
<br />
Final Rank Value (469.5) = Starting Rank Value (472.0) + Head To Head Adjustments (-2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.152[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.038<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 472.0
- 400 + ( ( 0.038 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 472.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.002
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2614 | 2025-11-16 | ARCRED                                    | L   | 0.495      | -            | -                | -                | -         |    -0.95 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            6 |     2711 | 2025-11-12 | Copenhagen Wolves (American organization) | L   | 0.468      | -            | -                | -                | -         |    -2.52 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            5 |     4987 | 2025-09-11 | Copenhagen Wolves (American organization) | W   | 0.052      | 0.435        | 0.001 (0.000)    | 0.335 (0.008)    | 0 (0.000) |     1.34 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            4 |     5024 | 2025-09-10 | Magic (Russian team)                      | L   | 0.047      | -            | -                | -                | -         |    -0.04 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            3 |     5066 | 2025-09-09 | Eternal Fire                              | L   | 0.040      | -            | -                | -                | -         |    -0.25 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            2 |     5118 | 2025-09-08 | Team Nemesis                              | L   | 0.034      | -            | -                | -                | -         |    -0.01 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            1 |     5188 | 2025-09-06 | KONO.ECF                                  | L   | 0.020      | -            | -                | -                | -         |    -0.10 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
