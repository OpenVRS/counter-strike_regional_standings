### Roster Details<br />
Team Name: Eternal premium<br />
Roster: dazzy, MRcreed, P1kaN0, skept1K, Sm1th<br />
Global Rank: [234](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [148]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  687.9<br />
<br />
Final Rank Value (687.9) = Starting Rank Value (701.1) + Head To Head Adjustments (-13.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.232[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.188[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.1
- 400 + ( ( 0.158 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 701.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.126
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      339 | 2026-05-22 | Oxuji Esports        | L   | 1.000      | -            | -                | -                | -         |    -2.52 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|           13 |      360 | 2026-05-22 | BAKS Esports         | L   | 1.000      | -            | -                | -                | -         |   -14.85 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|           12 |      371 | 2026-05-22 | WeClear              | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.033 (0.010)    | 1 (1.000) |     6.05 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|           11 |     1733 | 2026-04-07 | CYBERSHOKE Prospects | L   | 0.838      | -            | -                | -                | -         |    -4.07 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|           10 |     1739 | 2026-04-07 | Premghouls           | W   | 0.838      | 0.276        | 0.000 (0.000)    | 0.020 (0.005)    | 1 (0.838) |     7.40 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|            9 |     2048 | 2026-04-02 | CYBERSHOKE Prospects | L   | 0.806      | -            | -                | -                | -         |    -4.11 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|            8 |     2068 | 2026-04-02 | TDK                  | L   | 0.805      | -            | -                | -                | -         |    -1.32 | dazzy, MRcreed, P1kaN0, skept1K, Sm1th  |
|            7 |     3169 | 2026-03-15 | Aurora Young Blud    | L   | 0.685      | -            | -                | -                | -         |   -10.94 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |
|            6 |     3242 | 2026-03-13 | Cirahvi              | W   | 0.673      | 0.143        | 0.004 (0.000)    | 0.562 (0.054)    | 0 (0.000) |    12.84 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |
|            5 |     3342 | 2026-03-11 | LFO (Turkish team)   | W   | 0.660      | 0.143        | 0.000 (0.000)    | 0.021 (0.002)    | 0 (0.000) |     3.50 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |
|            4 |     3431 | 2026-03-09 | MASONIC              | W   | 0.646      | 0.143        | 0.006 (0.001)    | 0.605 (0.056)    | 0 (0.000) |    17.48 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |
|            3 |     3653 | 2026-03-05 | NEW VISION           | L   | 0.620      | -            | -                | -                | -         |    -7.70 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |
|            2 |     3715 | 2026-03-04 | MUERTA TEAM          | L   | 0.612      | -            | -                | -                | -         |   -14.17 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |
|            1 |     3745 | 2026-03-03 | 1w Team              | L   | 0.610      | -            | -                | -                | -         |    -0.72 | dazzy, fynchoja, P1kaN0, skept1K, Sm1th |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($302.13)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-07 |      0.839 | $360.00        | $302.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
