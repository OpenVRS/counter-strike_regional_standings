### Roster Details<br />
Team Name: Nas<br />
Roster: Biuckmt, Corazz, Mirorr, Mort1s, p5p<br />
Global Rank: [222](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_10_05.md)<br />
Regional Rank: [22]( ../../standings_asia_2026_10_05.md)<br />
<br />
Final Rank Value:  679.4<br />
<br />
Final Rank Value (679.4) = Starting Rank Value (657.3) + Head To Head Adjustments (22.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.015[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.3
- 400 + ( ( 0.129 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 657.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      597 | 2026-09-23 | Rare Atom        | L   | 1.000      | -            | -                | -                | -         |    -8.11 | Biuckmt, Corazz, Mirorr, Mort1s, p5p  |
|           13 |      666 | 2026-09-22 | Kaleido          | L   | 1.000      | -            | -                | -                | -         |   -12.44 | Biuckmt, Corazz, Mirorr, Mort1s, p5p  |
|           12 |      715 | 2026-09-20 | LFO 9            | W   | 1.000      | 0.270        | 0.001 (0.000)    | 0.172 (0.046)    | 0 (0.000) |    10.84 | Biuckmt, Corazz, Mirorr, Mort1s, p5p  |
|           11 |      921 | 2026-09-15 | Secret           | W   | 1.000      | 0.270        | 0.000 (0.000)    | 0.069 (0.019)    | 0 (0.000) |     9.04 | Biuckmt, Corazz, Mirorr, Mort1s, p5p  |
|           10 |     1002 | 2026-09-12 | WXM              | W   | 1.000      | 0.270        | 0.001 (0.000)    | 0.034 (0.009)    | 0 (0.000) |     9.78 | Biuckmt, Corazz, Mirorr, Mort1s, p5p  |
|            9 |     1104 | 2026-09-10 | Legion           | W   | 1.000      | 0.270        | 0.000 (0.000)    | 0.103 (0.028)    | 0 (0.000) |     9.40 | Biuckmt, Corazz, Mirorr, Mort1s, p5p  |
|            8 |     1751 | 2026-08-28 | Alter Ego        | L   | 0.946      | -            | -                | -                | -         |    -9.14 | Biuckmt, Corazz, Mirorr, Mort1s, p5p  |
|            7 |     1792 | 2026-08-27 | XDM              | W   | 0.940      | 0.333        | 0.001 (0.000)    | 0.101 (0.032)    | 0 (0.000) |    15.61 | Biuckmt, Corazz, Mirorr, Mort1s, p5p  |
|            6 |     1839 | 2026-08-26 | BRONUUD          | W   | 0.933      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.60 | Biuckmt, Corazz, Mirorr, Mort1s, p5p  |
|            5 |     1884 | 2026-08-25 | The Huns         | L   | 0.927      | -            | -                | -                | -         |    -3.20 | Biuckmt, Corazz, Mirorr, Mort1s, p5p  |
|            4 |     1929 | 2026-08-24 | The Huns         | L   | 0.919      | -            | -                | -                | -         |    -3.28 | Biuckmt, Corazz, Mirorr, Mort1s, p5p  |
|            3 |     4905 | 2026-05-01 | Wings of Freedom | L   | 0.157      | -            | -                | -                | -         |    -3.46 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |
|            2 |     4944 | 2026-05-01 | Legion           | W   | 0.153      | 0.471        | 0.000 (0.000)    | 0.103 (0.007)    | 1 (0.153) |     1.58 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |
|            1 |     4999 | 2026-04-30 | 5star            | L   | 0.144      | -            | -                | -                | -         |    -0.17 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,500.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-20 |      1.000 | $1,500.00      | $1,500.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
