### Roster Details<br />
Team Name: FengDa<br />
Roster: 3gl, afufu, p5p, Trash<br />
Global Rank: [249](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [26]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  650.5<br />
<br />
Final Rank Value (650.5) = Starting Rank Value (631.1) + Head To Head Adjustments (19.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.1
- 400 + ( ( 0.121 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 631.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     4274 | 2026-04-09 | Chinggis Warriors | W   | 0.185      | 0.333        | 0.006 (0.000)    | 0.112 (0.007)    | 0 (0.000) |     3.87 | 3gl, afufu, p5p, Trash, ZJFkingofking |
|           10 |     4328 | 2026-04-07 | Chinggis Warriors | W   | 0.172      | 0.333        | 0.006 (0.000)    | 0.112 (0.006)    | 0 (0.000) |     3.63 | 3gl, afufu, p5p, Trash, ZJFkingofking |
|            9 |     4411 | 2026-04-05 | Banzai            | W   | 0.159      | 0.333        | 0.001 (0.000)    | 0.047 (0.003)    | 0 (0.000) |     2.67 | 3gl, afufu, p5p, Trash, ZJFkingofking |
|            8 |     4578 | 2026-04-03 | Change The Game   | W   | 0.145      | 0.333        | 0.000 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     2.32 | 3gl, afufu, p5p, salmon, Trash        |
|            7 |     4678 | 2026-04-02 | Just Swing        | W   | 0.138      | 0.333        | 0.003 (0.000)    | 0.266 (0.012)    | 0 (0.000) |     2.56 | 3gl, afufu, p5p, salmon, Trash        |
|            6 |     5152 | 2026-03-27 | BMZ               | W   | 0.099      | 0.333        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     1.42 | 3gl, afufu, Marek, p5p, Trash         |
|            5 |     5185 | 2026-03-26 | Alter Ego         | W   | 0.093      | 0.333        | 0.002 (0.000)    | 0.279 (0.009)    | 0 (0.000) |     1.89 | 3gl, afufu, Marek, p5p, Trash         |
|            4 |     5242 | 2026-03-25 | BMZ               | L   | 0.085      | -            | -                | -                | -         |    -1.47 | 3gl, afufu, Marek, p5p, Trash         |
|            3 |     5377 | 2026-03-23 | BORING PLAYERS    | W   | 0.072      | 0.333        | 0.000 (0.000)    | 0.056 (0.001)    | 0 (0.000) |     1.17 | 3gl, afufu, p5p, Trash, zy            |
|            2 |     5481 | 2026-03-21 | NSN               | W   | 0.059      | 0.333        | 0.000 (0.000)    | 0.047 (0.001)    | 0 (0.000) |     0.59 | 3gl, afufu, p5p, Trash, zy            |
|            1 |     5537 | 2026-03-20 | QuantumX          | W   | 0.053      | 0.333        | 0.000 (0.000)    | 0.051 (0.001)    | 0 (0.000) |     0.78 | 3gl, afufu, p5p, Trash, zy            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,422.08)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-09 |      0.185 | $5,000.00      | $927.19         |
| 2026-03-27 |      0.099 | $5,000.00      | $494.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
