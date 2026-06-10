### Roster Details<br />
Team Name: Matrix (Ukrainian team)<br />
Roster: EgorMercedes, frakenzor, joly, kyoto666, md262<br />
Global Rank: [281](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [179]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  584.1<br />
<br />
Final Rank Value (584.1) = Starting Rank Value (621.5) + Head To Head Adjustments (-37.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.271[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 621.5
- 400 + ( ( 0.115 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 621.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.088
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      653 | 2026-05-16 | PURE           | L   | 1.000      | -            | -                | -                | -         |   -21.53 | EgorMercedes, frakenzor, joly, md262, Qweall        |
|           13 |      660 | 2026-05-16 | BASEMENT BOYS  | L   | 1.000      | -            | -                | -                | -         |    -2.24 | EgorMercedes, frakenzor, joly, md262, Qweall        |
|           12 |      838 | 2026-05-10 | BASEMENT BOYS  | L   | 1.000      | -            | -                | -                | -         |    -2.55 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|           11 |      855 | 2026-05-10 | HAFO           | W   | 1.000      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     7.40 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|           10 |      865 | 2026-05-10 | Gatorian       | L   | 1.000      | -            | -                | -                | -         |   -22.10 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            9 |     1058 | 2026-05-02 | Johnny Speeds  | L   | 0.952      | -            | -                | -                | -         |    -1.44 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            8 |     1075 | 2026-05-01 | ROUNDS         | L   | 0.948      | -            | -                | -                | -         |   -11.57 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            7 |     1080 | 2026-05-01 | SAW            | W   | 0.948      | 0.303        | 0.001 (0.000)    | 0.198 (0.057)    | 1 (0.948) |    20.14 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            6 |     1083 | 2026-05-01 | G2 Ares        | L   | 0.948      | -            | -                | -                | -         |    -3.42 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            5 |     2860 | 2026-03-23 | ASTRAL Esports | L   | 0.687      | -            | -                | -                | -         |    -2.54 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            4 |     2870 | 2026-03-23 | Wave Esports   | W   | 0.687      | 0.333        | 0.000 (0.000)    | 0.058 (0.013)    | 1 (0.687) |    10.49 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            3 |     2873 | 2026-03-23 | Hypewrld       | L   | 0.687      | -            | -                | -                | -         |    -5.95 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            2 |     5777 | 2026-01-15 | MANA eSports   | L   | 0.239      | -            | -                | -                | -         |    -1.55 | EgorMercedes, frakenzor, joly, kyoto666, MagaPriora |
|            1 |     5782 | 2026-01-15 | MOUZ NXT       | L   | 0.238      | -            | -                | -                | -         |    -0.62 | EgorMercedes, frakenzor, joly, kyoto666, MagaPriora |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
