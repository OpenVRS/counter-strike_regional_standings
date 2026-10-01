### Roster Details<br />
Team Name: Ding Cuts<br />
Roster: biebs, blood, delkud, maxed, Val<br />
Global Rank: [299](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [36]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  617.2<br />
<br />
Final Rank Value (617.2) = Starting Rank Value (626.3) + Head To Head Adjustments (-9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.240[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 626.3
- 400 + ( ( 0.117 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 626.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1065 | 2026-06-12 | DXA         | L   | 0.852      | -            | -                | -                | -         |   -13.83 | biebs, delkud, Kiyo, maxed, Val       |
|           15 |     1092 | 2026-06-11 | Ground Zero | L   | 0.845      | -            | -                | -                | -         |    -3.60 | biebs, delkud, Kiyo, maxed, Val       |
|           14 |     1106 | 2026-06-10 | DXA         | W   | 0.838      | 0.306        | 0.002 (0.000)    | 0.162 (0.042)    | 0 (0.000) |    12.53 | biebs, delkud, Kiyo, maxed, Val       |
|           13 |     2405 | 2026-04-30 | Abyssal     | L   | 0.565      | -            | -                | -                | -         |    -7.01 | biebs, blood, delkud, maxed, Val      |
|           12 |     2451 | 2026-04-29 | Mindfreak   | W   | 0.558      | 0.278        | 0.001 (0.000)    | 0.145 (0.022)    | 0 (0.000) |    12.01 | biebs, blood, delkud, maxed, Val      |
|           11 |     2536 | 2026-04-27 | Abyssal     | L   | 0.545      | -            | -                | -                | -         |    -6.77 | biebs, blood, delkud, maxed, Val      |
|           10 |     2847 | 2026-04-18 | Abyssal     | L   | 0.490      | -            | -                | -                | -         |    -6.60 | biebs, blood, delkud, maxed, Val      |
|            9 |     2865 | 2026-04-17 | Rooster     | L   | 0.484      | -            | -                | -                | -         |    -3.96 | biebs, blood, delkud, maxed, Val      |
|            8 |     2868 | 2026-04-17 | DXA         | W   | 0.483      | 0.305        | 0.002 (0.000)    | 0.162 (0.024)    | 0 (0.000) |     7.56 | biebs, blood, delkud, maxed, Val      |
|            7 |     2967 | 2026-04-11 | Rooster     | W   | 0.444      | 0.305        | 0.008 (0.001)    | 0.379 (0.051)    | 0 (0.000) |    10.58 | biebs, blood, delkud, maxed, Val      |
|            6 |     2970 | 2026-04-11 | Time Waves  | W   | 0.443      | 0.305        | 0.000 (0.000)    | 0.047 (0.006)    | 0 (0.000) |     3.28 | biebs, blood, delkud, maxed, Val      |
|            5 |     3450 | 2026-04-02 | BBBMBCBS    | L   | 0.379      | -            | -                | -                | -         |    -8.37 | blood, delkud, maxed, Val, Winnieeeee |
|            4 |     3451 | 2026-04-02 | Ground Zero | L   | 0.379      | -            | -                | -                | -         |    -1.43 | blood, delkud, maxed, Val, Winnieeeee |
|            3 |     5644 | 2026-02-21 | Skele       | L   | 0.112      | -            | -                | -                | -         |    -2.34 | biebs, delkud, luffy, R3XY, Val       |
|            2 |     5707 | 2026-02-19 | JFT         | W   | 0.104      | 0.317        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.72 | biebs, delkud, luffy, R3XY, Val       |
|            1 |     5807 | 2026-02-18 | Skele       | L   | 0.091      | -            | -                | -                | -         |    -1.93 | biebs, delkud, luffy, R3XY, Val       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($345.63)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-19 |      0.492 | $703.00        | $345.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
