### Roster Details<br />
Team Name: Eternal premium<br />
Roster: dazzy, MRcreed, P1kaN0, skept1K, Sm1th<br />
Global Rank: [232](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [147]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  686.8<br />
<br />
Final Rank Value (686.8) = Starting Rank Value (700.0) + Head To Head Adjustments (-13.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.230[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.184[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 700.0
- 400 + ( ( 0.156 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 700.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.120
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      449 | 2026-05-22 | Oxuji Esports        | L   | 1.000      | -            | -                | -                | -         |    -2.50 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|           13 |      470 | 2026-05-22 | BAKS Esports         | L   | 1.000      | -            | -                | -                | -         |   -14.64 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|           12 |      481 | 2026-05-22 | WeClear              | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.033 (0.010)    | 1 (1.000) |     6.11 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|           11 |     1843 | 2026-04-07 | CYBERSHOKE Prospects | L   | 0.786      | -            | -                | -                | -         |    -3.71 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|           10 |     1849 | 2026-04-07 | Premghouls           | W   | 0.785      | 0.276        | 0.000 (0.000)    | 0.018 (0.004)    | 1 (0.785) |     6.95 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|            9 |     2158 | 2026-04-02 | CYBERSHOKE Prospects | L   | 0.754      | -            | -                | -                | -         |    -3.70 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|            8 |     2178 | 2026-04-02 | TDK                  | L   | 0.753      | -            | -                | -                | -         |    -1.34 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|            7 |     3279 | 2026-03-15 | Aurora Young Blud    | L   | 0.633      | -            | -                | -                | -         |   -10.38 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |
|            6 |     3352 | 2026-03-13 | Cirahvi              | W   | 0.621      | 0.143        | 0.004 (0.000)    | 0.520 (0.046)    | 0 (0.000) |    11.58 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |
|            5 |     3452 | 2026-03-11 | LFO (Turkish team)   | W   | 0.608      | 0.143        | 0.000 (0.000)    | 0.020 (0.002)    | 0 (0.000) |     3.22 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |
|            4 |     3541 | 2026-03-09 | MASONIC              | W   | 0.594      | 0.143        | 0.006 (0.001)    | 0.568 (0.048)    | 0 (0.000) |    16.07 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |
|            3 |     3763 | 2026-03-05 | NEW VISION           | L   | 0.567      | -            | -                | -                | -         |    -7.20 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |
|            2 |     3825 | 2026-03-04 | MUERTA TEAM          | L   | 0.560      | -            | -                | -                | -         |   -13.01 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |
|            1 |     3855 | 2026-03-03 | 1w Team              | L   | 0.557      | -            | -                | -                | -         |    -0.69 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($283.32)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-07 |      0.787 | $360.00        | $283.32         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
